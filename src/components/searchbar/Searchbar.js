import { useState } from "react";
import axios from "axios";
import "./Searchbar.scss";

export default function Searchbar() {
  const API = process.env.REACT_APP_MET_API_URL;
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResults([]);
    const formattedInput = searchInput.split(" ").join("+");
    axios
      .get(`${API}search?q=${formattedInput}`)
      .then(({ data }) => {
        setSearchResults(data.objectIDs);
        setSearchInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="searchbar" onSubmit={handleSubmit}>
      <form className="searchbar__form">
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
    </div>
  );
}
