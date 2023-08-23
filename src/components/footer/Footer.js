import { useEffect, useState } from "react";
import axios from "axios";
import "./Footer.scss"

export default function Footer () {
    const API = process.env.REACT_APP_MET_API_URL;

  const [itemIDs, setItemIDs] = useState({});

  useEffect(() => {
    console.log(API)
    axios
      .get(API)
      .then(({ data }) => setItemIDs(data))
      .catch((error) => console.log(error));
  }, []);
    return (
        <footer>
            Live Items:{itemIDs.total}
        </footer>
    )
}