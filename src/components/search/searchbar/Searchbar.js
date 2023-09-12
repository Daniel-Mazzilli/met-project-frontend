import { useEffect } from "react";
import { useSearchProvider } from "../../../providers/SearchProvider.js";
import "./Searchbar.scss";

export default function Searchbar() {
  const {
    METAPI,
    axios,
    searchInput,
    setSearchInput,
    setSearchHeader,
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
  } = useSearchProvider();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    setPagination(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //   if (searchInput !== "") {
    //     setSearchResults([]);
    //     setSearchHeader("");
    //     setDisplayedIDs([]);
    //     const formattedInput = searchInput.split(" ").join("+");
    //     axios
    //       .get(`${METAPI}search?q=${formattedInput}`)
    //       .then(({ data }) => {
    //         setSearchResults(data.objectIDs);
    //         setSearchHeader(searchInput);
    //         setDisplayedIDs(data.objectIDs.slice(0, 8));
    //         setSearchInput("");
    //       })
    //       .catch((err) => console.log(err));
    //   } else {
    //     setDisplayedIDs(
    //       searchResults.slice(8 * (pagination + 1), 8 * (pagination + 1) + 8)
    //     );
    //     setPagination(pagination + 1);
    //   }
  };

  useEffect(() => {
    if (searchInput !== "") {
      setLoading(true);
      setError(false);
      const formattedInput = searchInput.split(" ").join("+");

      let cancel;
      axios({
        method: "GET",
        url: `${METAPI}search?q=${formattedInput}`,
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
        .then(({ data }) => {
          setSearchResults(data.objectIDs || []);
          setDisplayedIDs(data.objectIDs ? data.objectIDs.slice(0, 8) : []);
          setHasMore(data.total > 8);
          setLoading(false);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          setError(true);
          console.log(err);
        });

      return () => cancel();
    }

    if (searchInput === "") {
      setSearchResults([]);
      setDisplayedIDs([]);
    }
  }, [searchInput]);

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <input
          className="searchbar__form__input"
          type="text"
          placeholder="Search Full Collection"
          value={searchInput}
          onChange={handleChange}
        />
        <input
          className="searchbar__form__submit"
          type="submit"
          value="SEARCH"
        />
      </form>
    </div>
  );
}
