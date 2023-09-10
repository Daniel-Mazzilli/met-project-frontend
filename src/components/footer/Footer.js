import { formatItemCount } from "../../helperFunctions/helperFunctions";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__creator"><span>Daniel Mazzilli</span></div>
      {/* <div>
        |
      </div> */}
      <div className="footer__items">
        Item Count: <span className="footer__items__count">{itemIDs.total === undefined ? "loading" : formatItemCount(itemIDs.total)}</span>
      </div>
    </footer>
  );
}
