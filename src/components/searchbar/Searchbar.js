import { useState } from "react";
import "./Searchbar.scss";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <input
          className="searchbar__form__input"
          type="text"
          placeholder="Search Full Collection"
        />
        <input className="searchbar__form__submit" type="submit" value="SEARCH" />
      </form>
    </div>
  );
}
