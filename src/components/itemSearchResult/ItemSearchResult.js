import { useState, useEffect } from "react";
import axios from "axios";
import "./ItemSearchResult.scss";

export default function ItemSearchResult({itemID}) {
    const API = process.env.REACT_APP_MET_API_URL;
    const [itemDetails, setItemDetails] = useState({})

    useEffect(()=>{
        axios
        .get(`${API}objects/${itemID}`)
        .then(({ data }) => {
            setItemDetails(data);
        })
    }, [itemID])
    return (
        <div className="itemSearchResult">
            <img className="itemSearchResult__img" src={itemDetails.primaryImageSmall} alt="item"/>
        </div>
    )
}