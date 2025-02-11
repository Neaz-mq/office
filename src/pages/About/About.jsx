import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
        >
          About Us
        </motion.h2>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Description */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              We Are Craftcode – A Digital Agency
            </h3>
            <p className="text-lg sm:text-xl mb-6">
              At Craftcode, we specialize in delivering innovative digital
              solutions that help businesses grow. Our team of creative and
              skilled professionals works closely with clients to bring their
              ideas to life through high-quality web design, digital marketing,
              and branding strategies.
            </p>
            <p className="text-lg sm:text-xl mb-6">
              We believe in collaboration, transparency, and delivering results
              that exceed expectations.
            </p>
          </motion.div>

          {/* Right Side - Image or Team Photo */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center items-center"
          >
            <img
              src="/Team.jpg"
              alt="Team Photo"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-semibold mb-8">Our Core Values</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="w-full sm:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-8 bg-gray-700 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
              >
                <h4 className="text-2xl font-bold mb-4">Innovation</h4>
                <p className="text-lg">
                  We thrive on innovation, pushing boundaries to create
                  exceptional solutions.
                </p>
              </motion.div>
            </div>
            <div className="w-full sm:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="p-8 bg-gray-700 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
              >
                <h4 className="text-2xl font-bold mb-4">Collaboration</h4>
                <p className="text-lg">
                  Collaboration is key to success – we work with our clients
                  every step of the way.
                </p>
              </motion.div>
            </div>
            <div className="w-full sm:w-1/3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="p-8 bg-gray-700 rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
              >
                <h4 className="text-2xl font-bold mb-4">Excellence</h4>
                <p className="text-lg">
                  We are committed to delivering excellence in everything we
                  do, ensuring high-quality results.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
