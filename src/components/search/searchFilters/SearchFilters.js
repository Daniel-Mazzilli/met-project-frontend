import { useState } from "react";
import filtersArrow from "../../../assets/filters_arrow.png";
import "./SearchFilters.scss";

export default function SearchFilters() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  return (
    <div className="searchFilters">
      <div
        className="searchFilters__header"
        onClick={() => setFiltersOpen(!filtersOpen)}
      >
        Filters
        <img
          className={
            filtersOpen
              ? "searchFilters__header__arrow"
              : "searchFilters__header__arrowFlip"
          }
          src={filtersArrow}
          alt="filter arrow"
        />
      </div>

      {filtersOpen && (
        <div className="searchFilters__filters">
          <div>
            <select>
              <option>
                Search within: any
              </option>
              <option>title</option>
              <option>tags</option>
              <option>artist or culture</option>
              <option>medium (paintings, ceramics, etc)</option>
            </select>
          </div>

          <div>
            <select>
              <option>Department</option>
              <option>roman</option>
              <option>european painting</option>
              <option>to be added more</option>
            </select>
          </div>

          <div>
            <label>museum highlight</label>
            <input type="checkbox" />
          </div>

          <div>
            <label>on view</label>
            <input type="checkbox" />
          </div>

          <div>
            <label>has images</label>
            <input type="checkbox" />
          </div>
        </div>
      )}
    </div>
  );
}
