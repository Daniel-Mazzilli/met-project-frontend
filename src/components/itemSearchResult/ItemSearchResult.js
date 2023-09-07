import { useState, useEffect } from "react";
import axios from "axios";
import noimage from "../../assets/no-image-small.png";
import "./ItemSearchResult.scss";

export default function ItemSearchResult({
  itemID,
  setHighlight,
  setShowMore,
}) {
  const API = process.env.REACT_APP_MET_API_URL;
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    axios.get(`${API}objects/${itemID}`).then(({ data }) => {
      setItemDetails(data);
    });
  }, [itemID]);
  return (
    <div className="itemSearchResult">
      <img
        className="itemSearchResult__img"
        src={itemDetails.primaryImageSmall || itemDetails.primaryImage || noimage}
        alt="item"
        onClick={() => {
          setShowMore(false);
          setHighlight(itemID);
          window.scrollTo(0, 0);
        }}
      />
    </div>
  );
}
