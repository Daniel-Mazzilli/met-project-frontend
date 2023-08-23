import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import ItemSmallCard from "./components/itemSmallCard/ItemSmallCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemSmallCard />
      <ItemSmallCard />
      <ItemSmallCard />
      <Footer />
    </div>
  );
}

export default App;
