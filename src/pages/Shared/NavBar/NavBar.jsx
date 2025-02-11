import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Mobile menu icons
import logo from "/logo.webp"; // Ensure the path is correct

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-800 to-black text-white px-6 py-4 shadow-xl z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Craftcode Logo"
            className="h-16 w-16 rounded-full transition-transform transform hover:scale-110 duration-300"
          />
          <span className="text-xl font-bold tracking-wider uppercase hover:text-red-400 transition duration-300">
            Craftcode
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-white hover:text-red-400 transition duration-300 group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black bg-opacity-95 p-6 flex flex-col items-center space-y-4 md:hidden"
          >
            {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg text-white hover:text-red-400 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
