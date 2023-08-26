import { useEffect, useState } from "react";
import axios from "axios";
import { formatItemCount } from "../../helperFunctions/helperFunctions";
import "./Footer.scss";

export default function Footer() {
  const API = process.env.REACT_APP_MET_API_URL;

  const [itemIDs, setItemIDs] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/objects`)
      .then(({ data }) => setItemIDs(data))
      .catch((error) => console.log(error));
  }, []);
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
