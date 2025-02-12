import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Creative Design",
        category: "Graphic Design",
        image: "/portfolio1.jpg",
    },
    {
        id: 2,
        title: "Food order website",
        category: "Web Design",
        image: "/portfolio2.jpg",
    },
    {
        id: 3,
        title: "E-commerce Platform",
        category: "Web Development",
        image: "/portfolio3.jpg",
    },
];

const Portfolio = () => {
    return (
        <section className="relative py-20 bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl sm:text-5xl font-bold text-center mb-12"
                >
                    Our Portfolio
                </motion.h2>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="relative group overflow-hidden rounded-lg shadow-xl cursor-pointer"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-lg">{project.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </section>
    );
};

export default Portfolio;
