import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0.01 || pathname === "/about");
    };

    // Ejecutar también al montar, por si entras directamente en /about
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar_logo">
        <img className="navbar_img" src="/logo.png" alt="TheFoodTruck" />
      </div>
      <div className="navbar_links">
        <Link to="/" className="navbar_link">Home</Link>
        <Link to="/menu" className="navbar_link">Menu</Link>
        <Link to="/about" className="navbar_link">About</Link>
        <Link to="/contact" className="navbar_link">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
