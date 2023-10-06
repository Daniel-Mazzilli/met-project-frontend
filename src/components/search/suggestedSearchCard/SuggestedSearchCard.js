import "./SuggestedSearchCard.scss";

export default function SuggestedSearchCard({ title, imgLink }) {
  return (
    <div className="suggestedSearches">
      <div className="suggestedSearches__title">{title}</div>
      <div className="suggestedSearches__imgbox">
        <img
          className="suggestedSearches__imgbox__img"
          src={imgLink}
          alt={`${title} preview`}
        />
      </div>
    </div>
  );
}
