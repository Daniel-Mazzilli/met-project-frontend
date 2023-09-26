import { useEffect } from "react";
import { useSearchProvider } from "../../../providers/SearchProvider.js";
import "./Searchbar.scss";

export default function Searchbar() {
  const {
    METAPI,
    axios,
    searchInput,
    setSearchInput,
    searchResults,
    setSearchResults,
    displayedIDs,
    setDisplayedIDs,
    pagination,
    setPagination,
    loading,
    setLoading,
    error,
    setError,
    hasMore,
    setHasMore,
    fetchedItems,
    setFetchedItems,
    hasNoResults,
    setHasNoResults,
  } = useSearchProvider();

  const resetSearch = () => {
    setSearchResults([]);
    setDisplayedIDs([]);
    setFetchedItems([]);
    setPagination(0);
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchInput !== "") {
      resetSearch();
      setLoading(true);
      const formattedInput = searchInput.toLowerCase().split(" ").join("+");

      axios
        .get(`${METAPI}search?q=${formattedInput}`)
        .then(({ data }) => {
          if (data.total === 0) {
            setLoading(false);
            setHasNoResults(true);
          } else {
            setHasNoResults(false);
          }
          setSearchResults(data.objectIDs || []);
          setDisplayedIDs(data.objectIDs ? data.objectIDs.slice(0, 8) : []);
          setHasMore(data.total > 8);
        })
        .catch((err) => {
          setError(true);
          console.log(err);
        });
    }
    //testing pagination
    // else {
    //   setDisplayedIDs(
    //     searchResults.slice(8 * (pagination + 1), 8 * (pagination + 1) + 8)
    //   );
    //   setPagination(pagination + 1);
    // }
  };

  useEffect(() => {
    if (!searchInput) {
      resetSearch();
    }
  }, [searchInput]);

  const fetchItemData = (itemID) => {
    return axios
      .get(`${METAPI}objects/${itemID}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  };

  const getItemsData = async (items) => {
    try {
      const res = await Promise.all(items.map(fetchItemData));
      // remove undefined objects
      const filteredRes = res.filter((e) => e)
      setFetchedItems([...fetchedItems, ...filteredRes]);
      setLoading(false);
    } catch (err) {
      return console.log(err);
    }
  };

  useEffect(() => {
    if (displayedIDs.length > 0) {
      getItemsData(displayedIDs.slice(8 * pagination));
    }
  }, [displayedIDs]);

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <div className="searchbar__form__input">
          <input
            className="searchbar__form__input__text"
            type="text"
            placeholder="Search Full Collection"
            value={searchInput}
            onChange={handleChange}
          />
          <div
            className={`${
              !searchInput
                ? "searchbar__form__input__cancel"
                : "searchbar__form__input__cancel__active"
            }`}
            onClick={() => setSearchInput("")}
          >
            X
          </div>
        </div>
        <input
          className={
            searchInput
              ? "searchbar__form__submit"
              : "searchbar__form__submit inactive"
          }
          type="submit"
          value="SEARCH"
        />
      </form>
    </div>
  );
}
