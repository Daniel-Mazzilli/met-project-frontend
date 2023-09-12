import { useSearchProvider } from "../../../providers/SearchProvider";
import { useState, useEffect } from "react";
import noimage from "../../../assets/no-image-small.png";
import "./ItemSearchResult.scss";

export default function ItemSearchResult({ itemID, innerRef }) {
  const {METAPI, axios} = useSearchProvider();
  const [itemDetails, setItemDetails] = useState({});

  useEffect(() => {
    axios.get(`${METAPI}objects/${itemID}`).then(({ data }) => {
      setItemDetails(data);
    });
  }, [itemID]);

  return (
    <div ref={innerRef} className="itemSearchResult">
      <img
        className="itemSearchResult__img"
        src={
          itemDetails.primaryImageSmall || itemDetails.primaryImage || noimage
        }
        alt="item"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
      <div className="itemSearchResult__name">{itemDetails.title || "no title"}</div>
    </div>
  );
}
