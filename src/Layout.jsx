import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes where Navbar and Footer should be hidden
  const hideLayoutRoutes = ["/signup", "/signin"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default Layout;
