import { useContextProvider } from "../../providers/Provider.js";
import { formatItemCount } from "../../helperFunctions/helperFunctions";
// import Logo from "../../assets/METx_logo_dark.png";
import "./Footer.scss";

export default function Footer() {
  const { allItemIDs, isMenuClosing } = useContextProvider();
  return (
    <footer className={isMenuClosing? "footer nav-close" : "footer nav-open"}>
      <div>Daniel Mazzilli</div>
      {/* <img className="footer__logo" src={Logo} alt="logo" /> */}
      <div className="footer__items">
        Item Count:{" "}
        <span className="footer__items__count">
          {allItemIDs.total === undefined
            ? "loading"
            : formatItemCount(allItemIDs.total)}
        </span>
      </div>
    </footer>
  );
}
