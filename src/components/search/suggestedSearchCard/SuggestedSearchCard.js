import "./SuggestedSearchCard.scss";

export default function SuggestedSearchCard({ title, imgLink }) {
  return (
    <div className="suggestedSearches">
      <div>
        <div className="suggestedSearches__name">{title}</div>
        <img
          className="suggestedSearches__img"
          src={imgLink}
          alt={`${title} preview`}
        />
      </div>
    </div>
  );
}
