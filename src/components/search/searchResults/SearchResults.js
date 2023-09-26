import { useEffect, useState, useRef, useCallback } from "react";
import { useSearchProvider } from "../../../providers/SearchProvider";
import ItemSearchResult from "../itemSearchResult/ItemSearchResult.js";
import { formatItemCount } from "../../../helperFunctions/helperFunctions";
import darkLogo from "../../../assets/METx_logo_dark.png";
import arrowUp from "../../../assets/arrowup.png";
import "./SearchResults.scss";

export default function SearchResults() {
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

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });
  }, []);

  const observer = useRef();
  const lastItem = useCallback(
    (node) => {
      // console.log(node)
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // console.log("Visible");
          if (displayedIDs.length !== searchResults.length) {
            setLoading(true);
            setDisplayedIDs([
              ...displayedIDs,
              ...searchResults.slice(
                8 * (pagination + 1),
                8 * (pagination + 1) + 8
              ),
            ]);
            setPagination(pagination + 1);
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [fetchedItems, loading]
  );

  return (
    <div className="searchresults">
      {!loading && !searchResults.length && (
        <div>Explore The Met's Collection</div>
      )}

      {searchResults.length > 0 && fetchedItems.length > 0 && (
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

      {searchInput && loading && (
        <div className="searchresults__loading">
          <div className="searchresults__loading__spinner">
            <img
              className="searchresults__loading__logo"
              src={darkLogo}
              alt="logo"
            />
          </div>
        </div>
      )}

      {error && "An Error Occurred"}

      {showTopButton && (
        <div
          className="searchresults__top"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <img className="searchresults__top__icon" src={arrowUp} alt="arrow" />
        </div>
      )}
    </div>
  );
}
