import React, { useEffect, useState } from "react"
import "./NavBar.css"

function NavBar(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0.01);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar_logo">
                <img className="navbar_img" src="../public/logo.png" alt="TheFoodTruck" />
            </div>
            <div className="navbar_links">
                <a href="#" className="navbar_link">Home</a>
                <a href="#" className="navbar_link">Menu</a>
                <a href="#" className="navbar_link">Contact</a>
            </div>
        </nav>
    )
}

export default NavBar;
