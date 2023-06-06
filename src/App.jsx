import { Routes, Route } from "react-router-dom";

//Componentes//
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";
//////////////

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/:username" element={<Profile />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
