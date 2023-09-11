import Searchbar from "../searchbar/Searchbar.js"
import SearchResults from "../searchResults/SearchResults.js"
import "./SearchComponent.scss";

export default function SearchComponent() {
    return (
        <div className="search">
            <Searchbar />
            <SearchResults />
        </div>
    )
}