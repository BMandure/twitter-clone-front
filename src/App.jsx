import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

//Componentes//

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
import Following from "./pages/Following";
import Followers from "./pages/Followers";
import Page from "./components/Page";

//////////////

import "./App.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Page />}>
        <Route path="home" element={<Home />} />
        <Route path="profile/:username" element={<Profile />} />
        <Route path="profile/:username/following" element={<Following />} />
        <Route path="profile/:username/followers" element={<Followers />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
