import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroBg from "../../assets/HomeImages/tech2.webp";
import Carousal from "../elements/Carousal";

// const navigate = useNavigate();

const textArray = [
  "Digital Transformation",
  "AI-Powered Infrastructure",
  "IOT, AIoT, Blockchain ",
  "Next-gen Digital Solutions",
];
const typingSpeed = 100; // Speed of typing in ms
const deletingSpeed = 100; // Speed of deleting in ms
const delayBetweenTexts = 1000; // Delay before deleting in ms

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentText.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentText) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % textArray.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-center text-white px-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div> */}

      <motion.div
        className="relative max-w-3xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Empowering Your Business with <br />
          <span className="text-gradient">{text}|</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Transforming Ideas into Digital Reality
        </motion.p>

        <motion.a
          href="#services"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md mt-8"
          // initial={{ opacity: 0.2, scale: 0.8 }}
          // animate={{ scale: [1, 1.05, 1], opacity: 1 }}
          transition={{
            duration: 2, // Increased duration for smoother effect
            repeat: Infinity,
            repeatType: "mirror", // Creates a natural back-and-forth effect
            ease: "easeInOut", // Ensures smooth easing
          }}
        >
          Explore Services
        </motion.a>
      </motion.div>

      {/* Carousal at the bottom with proper spacing */}
      <div className="absolute bottom-6 w-full flex justify-center">
        <Carousal />
      </div>
    </section>
  );
};

export default Hero;
