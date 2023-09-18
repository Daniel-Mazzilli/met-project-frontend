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
  } = useSearchProvider();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
    setPagination(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      if (searchInput !== "") {
        setLoading(true);
        const formattedInput = searchInput.split(" ").join("+");
        
        axios
          .get(`${METAPI}search?q=${formattedInput}`)
          .then(({ data }) => {
            setSearchResults(data.objectIDs || []);
            setDisplayedIDs(data.objectIDs ? data.objectIDs.slice(0, 8) : []);
            setHasMore(data.total > 8);
          })
          .catch((err) => {
            setError(true);
            console.log(err)
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
  
  useEffect(()=> {
    setLoading(false);
  }, [searchResults])

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
          className = {searchInput ? "searchbar__form__submit" : "searchbar__form__submit inactive"}
          type="submit"
          value="SEARCH"
        />
      </form>
    </div>
  );
}
