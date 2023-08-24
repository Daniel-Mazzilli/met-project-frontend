import { useEffect, useState } from "react";
import axios from "axios";
import "./ItemSmallCard.scss";

export default function () {
    const URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/463315";

//   const URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/23367";

  const [item, setItem] = useState({});
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => setItem(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="smallCard">
      {item.objectID && (
        <div className="smallCard__details">
          <div className="smallCard__details__fields">
            <div>
              Title:
              <span className="smallCard__details__fields__bold">
                {item.title}
              </span>
            </div>

            <div>
              {item.artistRole}:
              <span className="smallCard__details__fields__bold">
                {item.artistDisplayName}
              </span>
            </div>
          </div>
          <button
            className="smallCard__details__button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "-" : "+"}
          </button>
        </div>
      )}

      {showMore && (
        <div className="smallCard__details hiddenSection">
          <div className="smallCard__details__fields">
            <div>
              Item Date:
              <span className="smallCard__details__fields__bold">
                {item.objectDate}
              </span>
            </div>

            <div>
              Medium:
              <span className="smallCard__details__fields__bold">
                {item.medium}
              </span>
            </div>

            <div>
              Dimensions:
              <span className="smallCard__details__fields__bold">
                {item.dimensions}
              </span>
            </div>

            <div>
              Department:
              <span className="smallCard__details__fields__bold">
                {item.department}
              </span>
            </div>

            <div>
              Culture:
              <span className="smallCard__details__fields__bold">
                {item.culture}
              </span>
            </div>

            <div>
              Gallery:
              <span className="smallCard__details__fields__bold">
                #{item.GalleryNumber}
              </span>
            </div>
          </div>

          <img
            className="smallCard__details__img"
            src={item.primaryImageSmall}
            alt="item image"
          />
        </div>
      )}
    </div>
  );
}
