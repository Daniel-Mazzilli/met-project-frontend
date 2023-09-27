import { useEffect } from "react";
import { useContextProvider } from "./providers/Provider.js";
import RouteComponent from "./components/routes/RouteComponent.js";
import "./App.scss";

function App() {
  const {isMenuOpen} = useContextProvider();

  //scroll lock when nav menu is open
  useEffect(() => {
    if(isMenuOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen])

  return (
    <div className="App">
      <RouteComponent />
    </div>
  );
}

export default App;