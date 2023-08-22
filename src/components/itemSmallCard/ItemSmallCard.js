import { useEffect, useState } from "react";
import axios from "axios";
import "./ItemSmallCard.scss";

export default function () {
  const URL =
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/463315";

  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => setItem(data))
      .catch((err) => console.log(err));
  }, []);

  return <div className="smallCard">
    {item.objectID && 
    <div className="smallCard__details">
    {item.title}
    <img className="smallCard__details__img" src={item.primaryImageSmall} alt="item image" />
    </div>}
  </div>;
}
