import { useEffect, useState, useRef, useCallback } from "react";
import { useSearchProvider } from "../../../providers/SearchProvider";
import ItemSearchResult from "../itemSearchResult/ItemSearchResult.js";
import { formatItemCount } from "../../../helperFunctions/helperFunctions";
import "./SearchResults.scss";

export default function SearchResults() {
  const [trigger, setTrigger] = useState(false);

  const {
    searchResults,
    displayedIDs,
    setDisplayedIDs,
    pagination,
    setPagination,
    loading,
    setLoading,
    error,
    searchInput,
    hasMore,
    fetchedItems,
  } = useSearchProvider();

  const observer = useRef();
  // const lastItem = useCallback(
  //   (node) => {
  //     // console.log(node)
  //     if (loading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasMore) {
  //         console.log("Visible");
  //         setDisplayedIDs([
  //           ...displayedIDs,
  //           ...searchResults.slice(
  //             8 * (pagination + 1),
  //             8 * (pagination + 1) + 8
  //           ),
  //         ]);
  //         setPagination(pagination + 1);
  //         setTrigger(!trigger);
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [loading, hasMore, trigger]
  // );

  return (
    <div className="search">
      {!searchResults.length && <div>search the Met's collection</div>}

      {!loading && fetchedItems.length > 0 && (
        <div className="search__results">
          <span>{formatItemCount(searchResults.length)}</span>Total Results
          <div className="search__results__items">
            {fetchedItems.map((e, i) => {
              if (i === fetchedItems.length - 1) {
                return (
                  <ItemSearchResult
                    // innerRef={lastItem}
                    key={e}
                    item={e}
                  />
                );
              } else {
                return <ItemSearchResult key={e} item={e} />;
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
