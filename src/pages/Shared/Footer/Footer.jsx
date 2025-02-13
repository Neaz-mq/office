import { useState, useEffect } from "react";

const Footer = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Show the scroll-to-top button when the user scrolls down
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    // Scroll to the top of the page when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className="bg-gray-900 text-white py-10 px-5 md:px-20 relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                {/* Branding Section */}
                <div className="flex flex-col items-center space-y-3">
                    <img src="/logo.webp" alt="Craftcode Logo" className="h-16 w-16 rounded-full" />
                    <h2 className="text-2xl font-bold">Craftcode</h2>
                    <p className="text-gray-400">Building digital experiences with passion.</p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col space-y-2">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <a href="#services" className="text-gray-400 hover:text-white">Services</a>
                    <a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a>
                    <a href="#about" className="text-gray-400 hover:text-white">About Us</a>
                    <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold">Follow Us</h3>
                    <div className="flex space-x-4 mt-3 justify-center">
                        <a href="https://www.facebook.com/prographr.page" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.behance.net/prographr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                            <i className="fab fa-behance"></i>
                        </a>

                        <a href="https://www.pinterest.com/prographr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                            <i className="fab fa-pinterest"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/prographr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>

                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
                &copy; {new Date().getFullYear()} Craftcode. All rights reserved.
            </div>

            {/* Scroll to Top Button */}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="absolute bottom-8 right-4 bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <i className="fas fa-arrow-up text-xl"></i>
                </button>
            )}
        </footer>
    );
};

export default Footer;
