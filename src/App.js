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
import Flex from "./pages/Flex";
import Play from "./pages/Play";
import PackDetails from "./components/PackDetails";
import FitvantageBusiness from "./pages/Bussiness";
import VantagePass from "./pages/VantagePass";

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
          <Route path="/flex" element={<Flex/>} />
          <Route path="/play" element={<Play/>} />
          <Route path="/packdetails" element={<PackDetails/>} />

          <Route path="/business" element={<FitvantageBusiness/>} />
          <Route path="/pass" element={<VantagePass/>} />






        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
