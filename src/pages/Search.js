import SearchProvider from "../providers/SearchProvider.js";
import SearchComponent from "../components/search/searchComponent/SearchComponent.js";

function Search() {
  return (
    <SearchProvider>
      <SearchComponent />
    </SearchProvider>
  );
}

export default Search;