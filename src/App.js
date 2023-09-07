import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import Searchbar from "./components/searchbar/Searchbar";
import ItemSmallCard from "./components/itemSmallCard/ItemSmallCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Searchbar />
        <br />
        {/* <ItemSmallCard />
        <ItemSmallCard />
        <ItemSmallCard /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
