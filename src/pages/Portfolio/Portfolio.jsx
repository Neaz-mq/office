import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Template Selling Platform",
        category: "Web Application",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739339367/Prographr-Home_gpbcw9.png",
        url: "https://prographr.com/"
    },
    {
        id: 2,
        title: "Bi-fold Brochure",
        category: "Business",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1729501595/2_svqkng.jpg",
        url: "https://prographr.com/template/675137f0467c4fede7597519"
    },
   
    {
        id: 3,
        title: "Creative Food Flyer",
        category: "Flyer",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1725950176/Food_Menu_Single_Page_Flyer_Artboard_1_ha6rke.jpg",
        url: "https://prographr.com/exclusive/676f8ef72b9895a4b41de90f"
    },
    
    {
        id: 4,
        title: "Architecture Tri-fold Brochure",
        category: "Brochure",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1725957026/Architect_Tri-fold_Brochure_Preview_Image_2_Artboard_1_emtesr.jpg",
        url: "https://prographr.com/exclusive/676f7fdfc23f22b58cbec074"
    },

    {
        id: 5,
        title: "Food Order Website",
        category: "Web Application",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739339258/Food-Buzz_urisga.png",
        url: "https://food-buzz-web.netlify.app/"
    },

    {
        id: 6,
        title: "Fabric Advertising Flyer ",
        category: "Flyer",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1725947496/Fabric_Advertising_Flyer_Design_1_pehhkl.jpg",
        url: "https://prographr.com/exclusive/676f767eb9d0407454463212"
    },
    {
        id: 7,
        title: "Medical Flyer",
        category: "Flyer",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1725958937/Medical_Service_Bundle_Pack_Flyer_Artboard_2_etuamx.jpg",
        url: "https://prographr.com/template/67501dc60f468fd85f14dfce"
    },
    {
        id: 8,
        title: "Environmental Flyer",
        category: "Flyer",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1725949955/Environmental_Flyer_Design_1_b0pavl.jpg",
        url: "https://prographr.com/template/6751242c467c4fede7597510"
    },
    {
        id: 9,
        title: "Sports Shop",
        category: "Web Application",
        image: "https://res.cloudinary.com/dzi3u164c/image/upload/v1739352849/Sports-shop_gngqc0.png",
        url: "https://sports-shop-order.netlify.app/"
    },
   
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="relative py-24 bg-gray-800 text-white">
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
                            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                                <p className="text-lg">{project.category}</p>
                                <motion.a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg transition duration-300"
                                >
                                    View Project
                                </motion.a>
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
