import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../src/componentets/navigation";
import Home from "../src/pages/Home";
import About from "./pages/aboutUs";
import Team from "./pages/team";
import Services from "./pages/services";

const App = () => {
  return (
    <Router>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
