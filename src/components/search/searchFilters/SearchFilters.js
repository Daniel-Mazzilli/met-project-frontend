import { useState } from "react";
import { useSearchProvider } from "../../../providers/SearchProvider.js";
import { departments } from "../../../data/departments";
import filtersArrow from "../../../assets/filters_arrow.png";
import "./SearchFilters.scss";

export default function SearchFilters() {
  const { setQueryFilters, queryFilters, filtersOpen, setFiltersOpen } = useSearchProvider();
  const filterChange = (event) => {
    //radio input
    if (event.target.name === "isOnView" || event.target.name === "hasImages") {
      return setQueryFilters({
        ...queryFilters,
        [event.target.name]: event.target.value,
      });
    }

    //checkbox input
    if (event.target.id === "isHighlight") {
      return setQueryFilters({
        ...queryFilters,
        [event.target.id]: event.target.checked,
      });
    }

    if (event.target.id === "searchWithin") {
      if (event.target.value === "") {
        return setQueryFilters({ ...queryFilters, [event.target.id]: {} });
      }
      delete queryFilters[event.target.id];
      return setQueryFilters({
        ...queryFilters,
        [event.target.id]: { [event.target.value]: true },
      });
    }

    return setQueryFilters({
      ...queryFilters,
      [event.target.id]: event.target.value,
    });
  };

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
            <select id="searchWithin" onChange={filterChange}>
              <option value="">Search within: all fields</option>
              <option value="title">title</option>
              <option value="tags">tags</option>
              <option value="artistOrCulture">artist or culture</option>
            </select>
          </div>

          <div>
            <select id="departmentId" onChange={filterChange}>
              <option value="">Department</option>
              {departments.map(({ departmentId, displayName }) => (
                <option key={departmentId} value={departmentId}>
                  {displayName}
                </option>
              ))}
            </select>
          </div>

          <div className="searchFilters__filters__radio">
            <input
              type="radio"
              id="on-view"
              name="isOnView"
              value={true}
              onChange={filterChange}
            />
            <label
              className={
                queryFilters.isOnView === "true"
                  ? "searchFilters__filters__radio__selected"
                  : ""
              }
              htmlFor="on-view"
            >
              on view
            </label>
            <input
              type="radio"
              id="not-on-view"
              name="isOnView"
              value={false}
              onChange={filterChange}
            />
            <label
              className={
                queryFilters.isOnView === "false"
                  ? "searchFilters__filters__radio__selected"
                  : ""
              }
              htmlFor="not-on-view"
            >
              not on view
            </label>
            <input
              type="radio"
              id="not-specified"
              name="isOnView"
              value=""
              onChange={filterChange}
              checked={queryFilters.isOnView === ""}
            />
            <label
              className={
                queryFilters.isOnView === ""
                  ? "searchFilters__filters__radio__selected"
                  : ""
              }
              htmlFor="not-specified"
            >
              all results
            </label>
          </div>

          {/* has images filter on API has issues - need to inquire with API */}
          {/* <div className="searchFilters__filters__radio">
            <input
              type="radio"
              id="has-images"
              name="hasImages"
              value={true}
              onChange={filterChange}
            />
            <label
              className={
                queryFilters.hasImages === "true"
                  ? "searchFilters__filters__radio__selected"
                  : ""
              }
              htmlFor="has-images"
            >
              has images
            </label>
            <input
              type="radio"
              id="no-images"
              name="hasImages"
              value={false}
              onChange={filterChange}
            />
            <label
              className={
                queryFilters.hasImages === "false"
                  ? "searchFilters__filters__radio__selected"
                  : ""
              }
              htmlFor="no-images"
            >
              no images
            </label>
            <input
              type="radio"
              id="not-specified-images"
              name="hasImages"
              value=""
              onChange={filterChange}
              checked={queryFilters.hasImages === ""}
            />
            <label
              className={
                queryFilters.hasImages === ""
                  ? "searchFilters__filters__radio__selected"
                  : ""
              }
              htmlFor="not-specified-images"
            >
              all results
            </label>
          </div> */}

          <div className="searchFilters__filters__checkbox">
            <label
              className={
                queryFilters.isHighlight
                  ? "searchFilters__filters__checkbox__checked"
                  : "searchFilters__filters__checkbox__unchecked"
              }
              htmlFor="isHighlight"
            >
              Museum Highlights Only
            </label>
            <input
              id="isHighlight"
              type="checkbox"
              onChange={filterChange}
              checked={queryFilters.isHighlight}
            />
          </div>
        </div>
      )}
    </div>
  );
}
