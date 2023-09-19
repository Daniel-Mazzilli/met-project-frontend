import noimage from "../../../assets/no-image-small.png";
import "./ItemSearchResult.scss";

export default function ItemSearchResult({ item, innerRef }) {

  return (
    <div ref={innerRef} className="itemSearchResult">
      <img
        className="itemSearchResult__img"
        src={
          item.primaryImageSmall || item.primaryImage || noimage
        }
        alt="item"
        // onClick={() => {
        //   window.scrollTo(0, 0);
        // }}
      />
      <div className="itemSearchResult__name">{item.title || "no title"}</div>
    </div>
  );
}
