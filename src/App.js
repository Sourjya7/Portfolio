import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    if (mode === false) {
      setMode(true);
    } else {
      setMode(false);
    }
  };

  return (
    <div>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />

          <Route path="/projects" element={<Projects mode={mode} />} />

          <Route path="/contact" element={<Contact mode={mode} />} />

          <Route exact path="/Portfolio" element={<Home mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
