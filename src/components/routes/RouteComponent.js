import { Routes, Route, Navigate } from "react-router-dom";
import About from "../../pages/About.js";
import Error from "../../pages/Error.js";
import Favorites from "../../pages/Favorites.js";
import Home from "../../pages/Home.js";
import Login from "../../pages/Login.js";
import Play from "../../pages/Play.js";
import Random from "../../pages/Random.js";
import Register from "../../pages/Register.js";
import Search from "../../pages/Search.js";
import User from "../../pages/User.js";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="play" element={<Play />} />
        <Route path="random-item" element={<Random />} />
        <Route path="search" element={<Search />} />
        <Route path="user">
          <Route index element={<User />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="/not-found" element={<Error />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
}

export default RouteComponent;
