import { motion } from "framer-motion";
import { Briefcase, Code, Palette, Brush, Globe, Users } from "lucide-react";

const services = [
    {
        icon: <Brush size={40} />,
        title: "Graphic Design",
        description: "Creating visually stunning designs to elevate brand identity.",
    },
    {
        icon: <Code size={40} />,
        title: "Web Development",
        description: "Building high-performance websites with cutting-edge technologies.",
    },
    {
        icon: <Palette size={40} />,
        title: "UI/UX Design",
        description: "Crafting user-friendly and aesthetically pleasing digital experiences.",
    },

    {
        icon: <Globe size={40} />,
        title: "Brand Strategy",
        description: "Helping brands establish a strong identity in the digital world.",
    },
    {
        icon: <Users size={40} />,
        title: "Consulting",
        description: "Providing expert guidance for businesses to grow and scale.",
    },
    {
        icon: <Briefcase size={40} />,
        title: "E-Commerce Solutions",
        description: "Creating seamless and scalable e-commerce platforms.",
    },
];

const Services = () => {
    return (
        <section className="relative py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl font-bold text-center mb-12"
                >
                    Our Services
                </motion.h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: false }}
                            className="p-8 bg-gray-800 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 text-center"
                        >
                            <div className="flex justify-center text-red-500 mb-6">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                            <p className="text-lg text-gray-300">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
