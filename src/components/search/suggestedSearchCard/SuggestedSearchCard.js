import { useSearchProvider } from "../../../providers/SearchProvider";
import { useNavigate } from "react-router-dom";
import "./SuggestedSearchCard.scss";

export default function SuggestedSearchCard({ title, imgLink }) {
  const navigate = useNavigate();
  const { setFiltersOpen } = useSearchProvider();
  return (
    <div
      className="suggestedSearches"
      onClick={() => {
        setFiltersOpen(false);
        navigate(`/search/${title.toLowerCase().replaceAll(" ", "+")}`);
      }}
    >
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
