import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog"; // Import Blog page
import AboutPage from "./pages/About";
import Footer from "./components/Footer"; // Import Footer component
import Services from "./pages/Service";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar"; // Import Footer component



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/blog"
          element={
            <Blog />
          }
        />
        <Route
          path="/services"
          element={
            <Services />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact />
          }
        />
         <Route
          path="/about"
          element={
            <AboutPage />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
