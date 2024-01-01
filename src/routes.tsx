import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Events from "./pages/Events";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Events" element={<Events />} />
    </Routes>
  );
};

export default AppRoutes;
