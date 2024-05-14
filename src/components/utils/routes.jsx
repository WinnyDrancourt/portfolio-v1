import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import Projets from "../projets/projets";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projets" element={<Projets />} />
    </Routes>
  );
}
