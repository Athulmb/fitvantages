import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog"; // Import Blog page
import AboutPage from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/blog"
          element={
            <Layout>
              <Blog />
            </Layout>
          }
        />
         <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />


      </Routes>


    </Router>
  );
};

export default App;
