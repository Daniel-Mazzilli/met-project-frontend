import { useSearchProvider } from "../../../providers/SearchProvider";
import ItemSearchResult from "../itemSearchResult/ItemSearchResult.js"
import "./SearchResults.scss";

export default function SearchResults() {
    const {searchResults, searchHeader, displayedIDs } = useSearchProvider();

    return (
        <div className="searchResults">
            {searchResults.length > 0 && (
        <div className="searchbar__results">
          {searchResults.length} search results for:{" "}
          <span className="searchbar__results__bold">{searchHeader}</span>
          <div className="searchbar__results__items">
            {displayedIDs.map((e) => (
              <ItemSearchResult
                key={e}
                itemID={e}
              />
            ))}
      </div>
        </div>
      )}
        </div>
    )
}