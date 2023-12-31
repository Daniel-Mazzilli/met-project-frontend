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
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [queryFilters, setQueryFilters] = useState({
    isHighlight: false,
    departmentId: "",
    isOnView: "",
    hasImages: "",
    searchWithin: {},
  });
  const [queryParameters, setQueryParameters] = useState("");

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
        queryFilters,
        setQueryFilters,
        queryParameters,
        setQueryParameters,
        filtersOpen,
        setFiltersOpen
      }}
    >
      {children}
    </SearchContextData.Provider>
  );
}

export default SearchProvider;
