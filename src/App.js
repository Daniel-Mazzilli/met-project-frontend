import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import ItemSmallCard from "./components/itemSmallCard/ItemSmallCard";

function App() {
  const API = process.env.REACT_APP_MET_API_URL;

  const [itemIDs, setItemIDs] = useState({});

  useEffect(() => {
    console.log(API)
    axios
      .get(API)
      .then(({ data }) => setItemIDs(data))
      .catch((error) => console.log(error));
  }, []);

  return <div className="App">
    <Navbar />
    Live Items:
  {itemIDs.total}
  <ItemSmallCard />
  </div>;
}

export default App;
