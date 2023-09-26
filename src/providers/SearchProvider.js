import { useContext, createContext, useState, useEffect } from "react";
import { useContextProvider } from "./Provider.js";

export const SearchContextData = createContext();
export function useSearchProvider() {
  return useContext(SearchContextData);
}

function SearchProvider({ children }) {
  const { METAPI, axios } = useContextProvider();

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedIDs, setDisplayedIDs] = useState([]);
  const [fetchedItems, setFetchedItems] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [hasNoResults, setHasNoResults] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    setPagination(0);
  }, [searchResults]);

  return (
    <SearchContextData.Provider
      value={{
        searchInput,
        setSearchInput,
        fetchedItems,
        setFetchedItems,
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
        loading,
        setLoading,
        error,
        setError,
        hasMore,
        setHasMore,
        hasNoResults,
        setHasNoResults,
      }}
    >
      {children}
    </SearchContextData.Provider>
  );
}

export default SearchProvider;
