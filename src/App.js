import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
