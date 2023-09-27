import { useState } from "react";
import noimage from "../../assets/no-image.png";
import "./ItemSmallCard.scss";

export default function () {

  const [item, setItem] = useState({});
  const [showMore, setShowMore] = useState(false);

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

            {item.artistDisplayName !== "" ? (
              <div>
                {item.artistRole}:
                <span className="smallCard__details__fields__bold">
                  {item.artistDisplayName}
                </span>
              </div>
            ) : (
              <div> No artist info</div>
            )}
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

            <div className="smallCard__details__fields__dimensions">
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
            src={item.primaryImageSmall || item.primaryImage || noimage}
            alt="item image"
          />
        </div>
      )}
    </div>
  );
}
