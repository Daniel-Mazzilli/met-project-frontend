import { useEffect, useState, useRef, useCallback } from "react";
import { useSearchProvider } from "../../../providers/SearchProvider";
import ItemSearchResult from "../itemSearchResult/ItemSearchResult.js";
import "./SearchResults.scss";

export default function SearchResults() {
  const {
    searchResults,
    searchHeader,
    displayedIDs,
    setDisplayedIDs,
    pagination,
    setPagination,
    loading,
    error,
    searchInput,
    hasMore,
  } = useSearchProvider();

  const observer = useRef();
  const lastItem = useCallback((node) => {
    // console.log(node)
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting && hasMore){
            console.log("Visible")
            //add code here
        }
    });
    if(node) observer.current.observe(node)
  }, [loading, hasMore]);

  return (
    <div id="search-results" className="searchResults">
      {!searchResults.length && <div>search the Met's collection</div>}
      {searchResults.length > 0 && (
        <div className="searchbar__results">
          {searchResults.length} search results for:{" "}
          <span className="searchbar__results__bold">{searchHeader}</span>
          <div className="searchbar__results__items">
            {displayedIDs.map((e, i) => {
              if (i === displayedIDs.length - 1) {
                return (
                  <ItemSearchResult innerRef={lastItem} key={e} itemID={e} />
                );
              } else {
                return <ItemSearchResult key={e} itemID={e} />;
              }
            })}
          </div>
        </div>
      )}
      {searchInput && loading && "Loading..."}
      {error && "Error"}
    </div>
  );
}
