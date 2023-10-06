import { useSearchProvider } from "../../../providers/SearchProvider";
import "./SuggestedSearchCard.scss";

export default function SuggestedSearchCard({ title, imgLink }) {
  const { setSearchInput } = useSearchProvider();
  return (
    <div className="suggestedSearches" onClick={() => setSearchInput(title)}>
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
