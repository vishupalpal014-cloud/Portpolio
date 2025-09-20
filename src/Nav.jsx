import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Resume", to: "resume" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
    { name: "Dashboard", to: "dashboard" },
    
  ];

  return (
    <nav className="bg-white/80 text-gray-900 shadow-md fixed w-full z-20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-indigo-600">
          PORTFOLIO
        </h1>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map((item) => (
            <motion.li
              key={item.to}
              whileHover={{ scale: 1.1, rotateZ: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="text-indigo-600 font-semibold"
                className="hover:text-indigo-400 cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white/90 text-gray-900 px-4 pb-4 space-y-4 text-center shadow-lg">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-500 cursor-pointer transition-colors text-lg font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
