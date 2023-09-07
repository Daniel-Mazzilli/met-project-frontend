import { useState, useEffect } from "react";
import axios from "axios";
import ItemSearchResult from "../itemSearchResult/ItemSearchResult";
import ItemSmallCard from "../itemSmallCard/ItemSmallCard";
import "./Searchbar.scss";

export default function Searchbar() {
  const API = process.env.REACT_APP_MET_API_URL;
  const [searchInput, setSearchInput] = useState("");
  const [searchHeader, setSearchHeader] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [displayedIDs, setDisplayedIDs] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [highlight, setHighlight] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    setPagination(0);
  }, [searchInput]);

  useEffect(() => {
    setHighlight(searchResults[8 * (pagination)])
  }, [pagination]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchInput !== "") {
      setSearchResults([]);
      setSearchHeader("");
      setDisplayedIDs([]);
      const formattedInput = searchInput.split(" ").join("+");
      axios
        .get(`${API}search?q=${formattedInput}`)
        .then(({ data }) => {
          setSearchResults(data.objectIDs);
          setSearchHeader(searchInput);
          setDisplayedIDs(data.objectIDs.slice(0, 8));
          setHighlight(data.objectIDs[0]);
          setSearchInput("");
        })
        .catch((err) => console.log(err));
    } else {
      setDisplayedIDs(
        searchResults.slice(8 * (pagination + 1), 8 * (pagination + 1) + 8)
      );
      setPagination(pagination + 1);
    }
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form" onSubmit={handleSubmit}>
        <input
          id="searchbar-input"
          className="searchbar__form__input"
          type="text"
          placeholder="Search Full Collection"
          value={searchInput}
          onChange={handleChange}
        />
        <input
          className="searchbar__form__submit"
          type="submit"
          value="SEARCH"
        />
      </form>

      {searchResults.length > 0 && (
        <div className="searchbar__results">
          {searchResults.length} search results for:{" "}
          <span className="searchbar__results__bold">{searchHeader}</span>
          <ItemSmallCard highlight={highlight || searchResults[0]} 
          showMore={showMore}
          setShowMore={setShowMore}
          />
          <div className="searchbar__results__items">
            {displayedIDs.map((e) => (
              <ItemSearchResult
                key={e}
                itemID={e}
                setHighlight={setHighlight}
                setShowMore={setShowMore}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
