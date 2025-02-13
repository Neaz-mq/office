import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section  className="relative bg-gray-800 text-white py-20 px-6 lg:px-20 text-center overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-50"></div>

            <motion.div
                className="relative max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Animated Heading */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl sm:text-6xl font-extrabold mb-6 text-white"
                >
                    Let’s Build Something Amazing Together
                </motion.h2>


                {/* Subtext */}
                <p className="text-lg text-gray-300 mb-8">
                    Ready to take your brand to the next level? Contact us today and let’s discuss how we can help you grow.
                </p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Link
                        to="https://prographr.com/contact"
                        className="bg-blue-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                    >
                        Get a Free Quote
                    </Link>
                    <a
                        href="https://prographr.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 hover:shadow-xl hover:bg-white hover:text-gray-800 transition-all duration-300"
                    >
                        View Our Work
                    </a>
                </motion.div>
            </motion.div>

            {/* Floating Glow Effects */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 opacity-20 rounded-full blur-3xl"></div>
        </section>
    );
};

export default CTA;
