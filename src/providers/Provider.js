import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar/Navbar.js";
// import Footer from "../components/footer/Footer.js";

export const ContextData = createContext();
export function useContextProvider() {
  return useContext(ContextData);
}

const METAPI = process.env.REACT_APP_MET_API_URL;
// const API = process.env.REACT_APP_API_URL;

function Provider({ children }) {
  // const localUserID = localStorage.getItem("userID");
  //   const [isSignedIn, setIsSignedIn] = useState(localUserID ? true : false);
  //   const [userID, setUserID] = useState(localUserID);
  //   const [authToken, setAuthToken] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  // to do - add dynamic to user pc theme preference
  // const [theme, setTheme] = useState(localStorage.getItem("theme" || "light"));
  const [allItemIDs, setAllItemIDs] = useState([]);

  //   useEffect(() => {
  //     localStorage.setItem("theme", theme);
  //   }, [theme]);

  //   axios.defaults.headers.common["authorization"] = `Bearer ${authToken}`;

  useEffect(() => {
    axios
      .get(`${METAPI}/objects`)
      .then(({ data }) => setAllItemIDs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    // <div className={theme}>
    <div>
      <ContextData.Provider
        value={{
          METAPI,
          axios,
          isMenuOpen,
          setIsMenuOpen,
          isMenuClosing,
          setIsMenuClosing,
          allItemIDs,
        }}
      >
        <Navbar />
        {children}
        {/* <Footer /> */}
      </ContextData.Provider>
    </div>
  );
}

export default Provider;
