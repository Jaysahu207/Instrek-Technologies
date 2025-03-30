import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-black dark:text-gray-900">
            About Instrek Technologies
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            We are a pioneer in AI, IoT, AIoT, Blockchain, and digital
            transformation, empowering businesses, governments, and institutions
            with innovative, technology-driven solutions.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* About Image with Animation */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2019/07/04/18/49/city-4317139_1280.jpg"
              alt="Instrek Technologies"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* About Details with Staggered Animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.h3
              className="text-2xl font-semibold text-black dark:text-gray-800"
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Our Expertise
            </motion.h3>
            <motion.p
              className="mt-4 text-gray-700 leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              At Instrek Technologies, we specialize in delivering cutting-edge
              AI-powered automation, smart city solutions, and scalable digital
              transformation strategies that redefine industries.
            </motion.p>

            {/* Animated List */}
            <motion.ul
              className="mt-6 space-y-3 text-gray-700"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {[
                {
                  title: "AI & Machine Learning",
                  desc: "Developing intelligent systems for automation and decision-making.",
                },
                {
                  title: "IoT & AIoT Solutions",
                  desc: "Connecting smart devices for real-time analytics and automation.",
                },
                {
                  title: "Blockchain & Cybersecurity",
                  desc: "Securing digital transactions with advanced blockchain technology.",
                },
                {
                  title: "Cloud Computing & IT Infrastructure",
                  desc: "Delivering scalable and secure cloud-based enterprise solutions.",
                },
                {
                  title: "Digital Transformation",
                  desc: "Strategizing AI-driven business processes for maximum efficiency.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  ✅{" "}
                  <span className="ml-2">
                    <strong>{item.title}:</strong> {item.desc}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold text-black">Our Mission</h3>
          <p className="mt-4 text-gray-700 max-w-4xl mx-auto">
            To drive AI-powered innovation, digital transformation, and smart
            automation, solving large-scale challenges for businesses and
            governments.
          </p>

          <h3 className="mt-10 text-2xl font-semibold text-black">
            Our Vision
          </h3>
          <p className="mt-4 text-gray-700 max-w-4xl mx-auto">
            To make India AI-ready by integrating advanced technologies that
            shape the future of intelligent automation and digital excellence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
