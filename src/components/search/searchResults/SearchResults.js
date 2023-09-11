import { useEffect, useState } from "react";
import { useSearchProvider } from "../../../providers/SearchProvider";
import ItemSearchResult from "../itemSearchResult/ItemSearchResult.js";
import "./SearchResults.scss";

export default function SearchResults() {
  const { searchResults, searchHeader, displayedIDs, setDisplayedIDs, pagination, setPagination } = useSearchProvider();

  //testing scrollHandler
//   const [scrollTop, setScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = event => {
//       setScrollTop(window.scrollY);
//     };
    
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const fullHeight = document.getElementById('search-results').offsetHeight;

//     if(scrollTop > fullHeight / 1.5){
//         setDisplayedIDs([searchResults.slice(pagination * 16, pagination * 17 )])
//         setPagination(pagination + 1)
//     }
//   }, [scrollTop])
  
  return (
    <div id="search-results" className="searchResults">
      {!searchResults.length && <div>search the Met's collection</div>}
      {searchResults.length > 0 && (
        <div className="searchbar__results">
          {searchResults.length} search results for:{" "}
          <span className="searchbar__results__bold">{searchHeader}</span>
          <div className="searchbar__results__items">
            {displayedIDs.map((e) => (
              <ItemSearchResult key={e} itemID={e} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
