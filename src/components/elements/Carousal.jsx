import React from "react";
import { motion } from "framer-motion";

const Carousal = () => {
  return (
    <div className="flex items-center  w-full max-w-6xl sm:max-w-7xl py-4 px-6 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 whitespace-nowrap p-2">
        Our Clients
      </h2>

      {/* Scrolling Logos */}
      <div className="relative w-[100%] overflow-hidden">
        <motion.div
          className="flex space-x-12"
          animate={{ x: [0, -1000] }} // Moves leftwards now
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Consistent speed
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 sm:h-10 md:h-12 object-contain"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousal;
const logos = [
  {
    src: "https://d1fxfakb0fcon3.cloudfront.net/images/index-page/holtec.webp",
    alt: "holtec",
  },
  {
    src: "https://d1fxfakb0fcon3.cloudfront.net/images/index-page/citi.webp",
    alt: "citi",
  },
  {
    src: "https://d1fxfakb0fcon3.cloudfront.net/images/index-page/noy.webp",
    alt: "noy",
  },
  {
    src: "https://d1fxfakb0fcon3.cloudfront.net/images/index-page/adobe-corporate.webp",
    alt: "adobe",
  },
  {
    src: "https://d1fxfakb0fcon3.cloudfront.net/images/index-page/verizon.webp",
    alt: "verizon",
  },
  {
    src: "https://d1fxfakb0fcon3.cloudfront.net/images/index-page/aws.webp",
    alt: "aws",
  },
];
