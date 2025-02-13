import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Lottie from "lottie-react";
import Swal from "sweetalert2"; // SweetAlert2 for better alerts

const Contact = () => {
    const [animationData, setAnimationData] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    useEffect(() => {
        fetch("https://assets3.lottiefiles.com/packages/lf20_kdx6cani.json")
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => console.error("Lottie JSON fetch error:", error));
    }, []);

    // Handle form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Email validation function (Must end with @gmail.com)
    const isValidGmail = (email) => {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    };

    // Handle form submission with AJAX
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validation: Ensure all fields are filled
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are required!",
            });
            return;
        }
    
        // Validate email (Must be a @gmail.com email)
        if (!isValidGmail(formData.email)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Email",
                text: "Please enter a valid Gmail address (e.g., yourname@gmail.com)",
            });
            return;
        }
    
        // Prepare form data with sender's name in the subject
        const submissionData = {
            ...formData,
            _subject: `New message from ${formData.name}`, // This will set the subject dynamically
        };
    
        // Send form data via FormSubmit using AJAX
        try {
            const response = await fetch("https://formsubmit.co/ajax/neazmorshed666@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submissionData),
            });
    
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: `Thank you, ${formData.name}! We will reply to your email soon.`,
                });
    
                // Clear form fields after submission
                setFormData({ name: "", email: "", message: "" });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong. Please try again later.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Network Error",
                text: "Please check your internet connection and try again.",
            });
        }
    };
    

    return (
        <section id="contact" className="relative py-24 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2 
                    className="text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Get in Touch
                </motion.h2>
                <p className="text-lg text-gray-300 mb-6">
                    Have a project in mind? Let’s work together.
                </p>
                {animationData && (
                    <div className="w-48 mx-auto mb-8">
                        <Lottie animationData={animationData} loop={true} />
                    </div>
                )}
            </div>

            <motion.div 
                className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Hidden input to prevent FormSubmit branding */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="javascript:void(0);" />

                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required 
                    />
                    <textarea 
                        rows="5" 
                        name="message"
                        placeholder="Your Message" 
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 bg-white/20 text-white placeholder-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        required
                    ></textarea>
                    <motion.button 
                        type="submit" 
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 rounded-lg text-lg font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>

            {/* Contact Info (Now Responsive) */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-gray-300 text-center">
                <div className="flex items-center gap-2 sm:gap-3 hover:text-white transition duration-300">
                    <FaPhoneAlt className="text-lg sm:text-xl" />
                    <span className="text-sm sm:text-base">+880 1303 660481</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 hover:text-white transition duration-300">
                    <FaEnvelope className="text-lg sm:text-xl" />
                    <span className="text-sm sm:text-base">craftcode.prographr.com</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 hover:text-white transition duration-300">
                    <FaMapMarkerAlt className="text-lg sm:text-xl" />
                    <span className="text-sm sm:text-base">Bogura, Bangladesh</span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
