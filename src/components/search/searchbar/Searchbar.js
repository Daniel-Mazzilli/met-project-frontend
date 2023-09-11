import { useSearchProvider } from "../../../providers/SearchProvider.js"
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
    setDisplayedIDs,
    pagination,
    setPagination,
  } = useSearchProvider();

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchInput !== "") {
      setSearchResults([]);
      setSearchHeader("");
      setDisplayedIDs([]);
      const formattedInput = searchInput.split(" ").join("+");
      axios
        .get(`${METAPI}search?q=${formattedInput}`)
        .then(({ data }) => {
          setSearchResults(data.objectIDs);
          setSearchHeader(searchInput);
          setDisplayedIDs(data.objectIDs.slice(0, 16));
          setSearchInput("");
        })
        .catch((err) => console.log(err));
    } else {
      setDisplayedIDs(
        searchResults.slice(16 * (pagination + 1), 16 * (pagination + 1) + 16)
      );
      setPagination(pagination + 1);
    }
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <input
          id="searchbar-input"
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
