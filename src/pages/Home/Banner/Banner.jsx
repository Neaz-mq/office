import { useEffect, useState } from "react";

const Banner = ({ isMenuOpen }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div
      className={`relative w-full h-screen flex items-center justify-center text-center transition-opacity duration-300 ${
        isMenuOpen ? "pointer-events-none opacity-50" : "opacity-100"
      }`}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source
            src="https://res.cloudinary.com/dzi3u164c/video/upload/v1739268328/Website_Agency_Promo_Video_-_After_Effects_Template_dxctfm.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div
        className={`relative z-20 transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          Elevate Your Business with Stunning Digital Solutions
        </h2>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#services"
            className="bg-red-500 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-red-600 transform hover:scale-105"
          >
            Discover Our Services
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-white hover:text-gray-800 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
