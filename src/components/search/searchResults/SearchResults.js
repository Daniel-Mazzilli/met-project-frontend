import { useEffect, useState, useRef, useCallback } from "react";
import { useSearchProvider } from "../../../providers/SearchProvider";
import ItemSearchResult from "../itemSearchResult/ItemSearchResult.js";
import SuggestedSearchCard from "../suggestedSearchCard/SuggestedSearchCard";
import { formatItemCount } from "../../../helperFunctions/helperFunctions";
import { suggestedSearches } from "../../../data/suggestedSearches";
import darkLogo from "../../../assets/METx_logo_dark.png";
import arrowUp from "../../../assets/arrowup.png";
import noResults from "../../../assets/no-results.png";
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
    hasNoResults,
  } = useSearchProvider();

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
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
      {!loading && !searchResults.length && !hasNoResults && (
        <div className="searchresults__suggested">
          <div className="searchresults__suggested__header">Explore The Met's Collection</div>
          <div className="searchresults__suggested__layout">
          {suggestedSearches.map(({ name, img, id }) => (
            <SuggestedSearchCard key={id} title={name} imgLink={img} />
          ))}
          </div>
        </div>
      )}

      {hasNoResults && (
        <div className="searchresults__noresults">
          <img
            className="searchresults__noresults__icon"
            src={noResults}
            alt="no results"
          />
          <div>No search results.</div>
        </div>
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

      {showTopButton && searchResults.length > 0 && (
        <div
          className="searchresults__top hover__pointer"
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <img className="searchresults__top__icon" src={arrowUp} alt="arrow" />
          <div className="searchresults__top__text">TOP</div>
        </div>
      )}
    </div>
  );
}
