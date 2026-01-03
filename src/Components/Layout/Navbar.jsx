import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import boardLogo from "../../assets/BOARD.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-50 flex items-center transition-all duration-300
        ${scrolled ? "bg-[#8B4513] shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={boardLogo}
                alt="Board Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">
              ReadMax <span className="font-normal">Global Educational</span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-white font-medium text-lg">
            {["/", "/about", "/services", "/contact"].map((path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition hover:text-[#FFD7B5] ${
                      isActive ? "text-[#FFD7B5] font-semibold" : ""
                    }`
                  }
                >
                  {["Home", "About", "Services", "Contact"][i]}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* MOBILE MENU ICON */}
          <div
            className="md:hidden text-2xl text-white cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>

      {/* MOBILE SIDE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="fixed top-0 right-0 w-72 h-full bg-[#8B4513] p-6 shadow-xl transition-transform">
            
            {/* CLOSE ICON */}
            <div className="flex justify-end mb-10">
              <FaTimes
                className="text-2xl text-white cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* MENU LINKS */}
            <ul className="flex flex-col gap-6 text-lg font-medium text-white">
              <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
              <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
