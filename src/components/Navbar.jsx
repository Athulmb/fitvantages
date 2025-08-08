"use client";
import React, { useRef, useState,useEffect } from "react";
import { useLocation } from "react-router-dom"; // For Next.js -> usePathname()
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarButton,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../components/ui/navbar";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FitNavbar = () => {
  const navRef = useRef(null);
  const { scrollY } = useScroll({ target: navRef });
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Next.js: usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  // ======== NAV LINKS FOR EACH TYPE ========
  const homeLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "about" },
    { name: "Our Services", link: "services" },
    { name: "Blog", link: "blog" },
    { name: "Contact Us", link: "contact" },
  ];

  const otherLinks = [
    { name: "Home", link: "/" },
    { name: "FAQ's", link: "/faqs" },
    { name: "Our Fee Plan", link: "/fees" },
    { name: "Login", link: "/signin" },
  ];

  const businessLinks = [
    { name: "Vantage pass", link: "/vantage-pass" },
    { name: "Corporates", link: "/corporates" },
    { name: "Contact Us", link: "/contact" },
    { name: "Login", link: "/signin" },
  ];

  // ======== DETERMINE NAV TYPE ========
const [navType, setNavType] = useState("home");
const NavType = (type) => {
  setNavType(type);
}; 
  useEffect(() => {
    if (
      ["/", "/about", "/services", "/blog", "/contact"].includes(location.pathname)
    ) {
      NavType("home");
    } else if (
      location.pathname.startsWith("/business") ||
      location.pathname.startsWith("/vantage-pass") ||
      location.pathname.startsWith("/corporates")
    ) {
      setNavType("business");
    } else if (location.pathname.startsWith("/elitecare")) {
      setNavType("other");
    } else {
      setNavType("other");
    }
  }, [location.pathname]); 

  const navLinks =
    navType === "home"
      ? homeLinks
      : navType === "business"
      ? businessLinks
      : otherLinks;

  const buttonText = navType === "home" ? "Get App" : "Join now";

  return (
    <>
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300" />
      )}

      <Navbar className="top-5 fixed z-50">
        <NavBody
          visible={visible}
          className="!max-w-8xl px-6 py-3 rounded-full !bg-transparent backdrop-blur-md shadow-md"
        >
          <div className="flex w-full items-center justify-between gap-6">
            {/* Logo */}
            <div className="relative w-36 h-12">
              <img
                src="/logo.png"
                alt="FitVantage Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                  visible ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src="/logo2.png"
                alt="FitVantage Logo Scrolled"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Links */}
            <div className="flex-1 flex justify-center ml-6">
              <NavItems items={navLinks} />
            </div>

            {/* CTA Button */}
            <div>
              <NavbarButton
                className="bg-green-400 text-black hover:bg-green-300 rounded-full px-6 py-2"
                href="#"
              >
                {buttonText}
              </NavbarButton>
            </div>
          </div>
        </NavBody>

        {/* Mobile Nav */}
        <MobileNav
          visible={visible}
          className="!max-w-7xl px-4 py-2 rounded-full !bg-transparent backdrop-blur-md shadow-md"
        >
          <MobileNavHeader className="w-full justify-between px-4 py-2">
            <div className="relative w-44 h-10">
              <img
                src="/logo.png"
                alt="FitVantage Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                  visible ? "opacity-0 scale-110" : "opacity-100 scale-125"
                }`}
              />
              <img
                src="/logo2.png"
                alt="FitVantage Logo Scrolled"
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
            </div>

            <MobileNavToggle
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
            {navLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-white font-medium text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton
              className="mt-4 bg-green-400 text-black rounded-full px-6 w-full text-center"
              href="#"
            >
              {buttonText}
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default FitNavbar;
