import { motion } from "framer-motion";

const testimonials = [
    {
        name: "John Doe",
        position: "CEO, TechCorp",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739353913/1_hazukt.jpg",
        quote: "This agency transformed our business. Their work is top-notch!",
    },
    {
        name: "Jane Smith",
        position: "Marketing Director, Creative Co.",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739354843/men3_dpnevd.jpg",
        quote: "Highly professional team. Our brand has never looked better!",
    },
    {
        name: "Michael Lee",
        position: "Founder, StartupX",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739353980/men1_gkpr0v.jpg",
        quote: "Exceptional service with great attention to detail. Highly recommended!",
    },
];

const Testimonials = () => {
    return (
        <div className="bg-gray-900 text-white py-16 px-6 lg:px-20 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-10 relative inline-block">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        What Our Clients Say
                    </motion.span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />
                            <div className="flex flex-col items-center text-center relative z-10">
                                <motion.img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full mb-4 border-4 border-gray-700 object-cover shadow-lg"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.3 }}
                                />
                                <motion.p
                                    className="text-lg italic"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.4 }}
                                >
                                    "{testimonial.quote}"
                                </motion.p>
                                <motion.h3
                                    className="mt-4 text-xl font-semibold"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.5 }}
                                >
                                    {testimonial.name}
                                </motion.h3>
                                <motion.p
                                    className="text-gray-400"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.6 }}
                                >
                                    {testimonial.position}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
