import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";

export const SearchContextData = createContext();
export function useSearchProvider() {
  return useContext(SearchContextData);
}

function SearchProvider({ children }) {
  const { METAPI, axios } = useContextProvider();

  const [searchInput, setSearchInput] = useState("");
  const [searchHeader, setSearchHeader] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedIDs, setDisplayedIDs] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setPagination(0);
  }, [searchResults]);

  return (
    <SearchContextData.Provider
      value={{
        searchInput,
        setSearchInput,
        searchHeader,
        setSearchHeader,
        searchResults,
        setSearchResults,
        displayedIDs,
        setDisplayedIDs,
        pagination,
        setPagination,
        selectedItem,
        setSelectedItem,
        METAPI,
        axios,
      }}
    >
      {children}
    </SearchContextData.Provider>
  );
}

export default SearchProvider;
