import { motion } from "framer-motion"; 
import { Briefcase, Code, Palette, Brush, Globe, Users } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [isLargeScreen, setIsLargeScreen] = useState(false);  // Initialize as false

  // Detecting screen size (canvas works for screens larger than 1900px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1900) {  // Only show the canvas for screens larger than 1900px
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };

    // Initialize resize listener
    window.addEventListener("resize", handleResize);
    
    // Check initial screen size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      const canvas = document.getElementById("floatingParticlesCanvas");
      const ctx = canvas.getContext("2d");

      const setCanvasSize = () => {
        const canvasWidth = 1000;  // Define a fixed canvas width for center alignment
        const canvasHeight = window.innerHeight;
        const canvasLeft = (window.innerWidth - canvasWidth) / 2;  // Calculate left offset to center

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.left = `${canvasLeft}px`;  // Apply left position to center the canvas
      };

      setCanvasSize(); // Initial canvas size

      const particles = [];
      const maxParticles = 50; // Lower particle count for more subtle effect

      const Particle = function () {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2; // Larger particles
        this.speedX = Math.random() * 0.5 - 0.25; // Random speed for horizontal movement
        this.speedY = Math.random() * 0.5 - 0.25; // Random speed for vertical movement
        this.color = "rgba(255, 255, 255, 0.7)";
      };

      Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary checking for wrapping effect
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      };

      Particle.prototype.draw = function () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      };

      function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
        if (particles.length < maxParticles) {
          particles.push(new Particle());
        }
        requestAnimationFrame(animateParticles);
      }

      animateParticles();

      window.addEventListener("resize", setCanvasSize);

      return () => {
        cancelAnimationFrame(animateParticles);
        window.removeEventListener("resize", setCanvasSize);
      };
    }
  }, [isLargeScreen]);

  return (
    <section className="relative py-20 bg-gray-900 text-white">
      {/* Canvas for floating particle animation (only on screens larger than 1900px) */}
      {isLargeScreen && <canvas id="floatingParticlesCanvas" className="absolute inset-0 z-0"></canvas>}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="p-6 sm:p-8 bg-gray-800 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 text-center"
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
