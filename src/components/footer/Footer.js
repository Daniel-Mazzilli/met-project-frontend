import { useContextProvider } from "../../providers/Provider.js";
import { formatItemCount } from "../../helperFunctions/helperFunctions";
import Logo from "../../assets/METx_logo_dark.png";
import githubLogo from "../../assets/github_logo.png";
import linkedInLogo from "../../assets/linkedIn_logo.png";
import "./Footer.scss";

export default function Footer() {
  const { allItemIDs, isMenuClosing } = useContextProvider();
  return (
    <footer className={isMenuClosing ? "footer nav-close" : "footer nav-open"}>
      <div className="footer__items">
        {/* <img className="footer__items__logo" src={Logo} alt="logo" /> */}
        Item Count:
        <span className="footer__items__count">
          {allItemIDs.total === undefined
            ? "loading"
            : formatItemCount(allItemIDs.total)}
        </span>
      </div>

      <div className="footer__dev">
        <div>Daniel Mazzilli</div>
        <div className="footer__dev__icons">
          <a href="https://github.com/Daniel-Mazzilli" target="_blank"
          className="footer__dev__icons__link">
            <img
              className="footer__dev__icons__link__icon"
              src={githubLogo}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mazzilli-daniel/"
            target="_blank"
            className="footer__dev__icons__link"
          >
            <img
              className="footer__dev__icons__link__icon"
              src={linkedInLogo}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
