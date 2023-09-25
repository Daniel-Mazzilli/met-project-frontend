import { useState, useRef, useCallback } from "react";
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
  const lastItem = useCallback(
    (node) => {
      // console.log(node)
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Visible");
          // setDisplayedIDs([
          //   ...displayedIDs,
          //   ...searchResults.slice(
          //     8 * (pagination + 1),
          //     8 * (pagination + 1) + 8
          //   ),
          // ]);
          // setPagination(pagination + 1);
          // setTrigger(!trigger);
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchedItems]
  );

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
    <div className="searchresults">
      {!loading && !searchResults.length && <div>Explore The Met's Collection</div>}

      {!loading && fetchedItems.length > 0 && (
        <div className="searchresults__items">
          <span>{formatItemCount(searchResults.length)}</span>Total Results
          <div className="searchresults__items__entry">
            {fetchedItems.map((e, i) => {
              if (i === fetchedItems.length - 1) {
                return (
                  <ItemSearchResult
                    innerRef={lastItem}
                    key={e.objectID}
                    item={e}
                  />
                );
              } else {
                return <ItemSearchResult key={e.objectID} item={e} />;
              }
            })}
          </div>
        </div>
      )}

      {searchInput && loading && "LOADING..."}

      {error && "An Error Occurred"}
    </div>
  );
}
