import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutPage from "./pages/About";
import Services from "./pages/Service";
import Contact from "./pages/Contact";
import FitnessSignup from "./components/Auth/Signup";
import Layout from "./Layout";
import EliteCare from "./pages/EliteCare";
import FitnessLogin from "./components/Auth/Login";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<FitnessSignup />} />
          <Route path="/signin" element={<FitnessLogin/>} />

          <Route path="/elitecare" element={<EliteCare/>} />

        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
