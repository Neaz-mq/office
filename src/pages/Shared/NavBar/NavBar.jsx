import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HashLink } from 'react-router-hash-link';  // Import HashLink for smooth scrolling
import logo from "/logo.webp";
import Banner from "../../Home/Banner/Banner";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-800 to-black text-white px-6 py-4 shadow-xl z-[100] backdrop-blur-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo (reload page when clicked) */}
          <button onClick={() => window.location.href = '/'} className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Craftcode Logo"
              className="h-16 w-16 rounded-full transition-transform transform hover:scale-110 duration-300"
            />
            <span className="text-xl font-bold tracking-wider uppercase hover:text-red-400 transition duration-300">
              Craftcode
            </span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-lg font-semibold">
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                {item === "Home" ? (
                  // Home link will reload the page
                  <button
                    onClick={() => window.location.href = '/'}
                    className="relative text-white hover:text-red-400 transition duration-300 group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ) : (
                  // Other items will scroll to section
                  <HashLink
                    smooth
                    to={`#${item.toLowerCase()}`}
                    className="relative text-white hover:text-red-400 transition duration-300 group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </HashLink>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button (Only Menu Icon) */}
          <button
            className="md:hidden text-white focus:outline-none transition-transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-1/3 h-auto bg-black bg-opacity-95 p-8 flex flex-col items-center space-y-2 md:hidden z-[999]"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            {/* Menu Items */}
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <li key={item}>
                {item === "Home" ? (
                  // Home link will reload the page
                  <button
                    onClick={() => window.location.href = '/'}
                    className="text-lg text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-red-500 hover:text-white"
                  >
                    {item}
                  </button>
                ) : (
                  // Other items will scroll to section
                  <HashLink
                    smooth
                    to={`#${item.toLowerCase()}`}
                    className="text-lg text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-red-500 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </HashLink>
                )}
              </li>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render Banner and pass `isOpen` to control opacity and pointer events */}
      <Banner isMenuOpen={isOpen} />
    </>
  );
};

export default NavBar;
