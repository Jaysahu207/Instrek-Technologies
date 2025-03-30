import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading with animation */}
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Technology Solutions
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We provide innovative AI, IoT, and blockchain-powered solutions to
          drive business transformation.
        </motion.p>

        {/* Service Cards with staggered animation */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-900 border cursor-pointer border-white rounded-xl shadow-lg transition hover:bg-white hover:text-black"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Updated Services Data
const serviceList = [
  {
    title: "AI-Powered Automation",
    description:
      "Leverage AI-driven automation to optimize workflows, enhance decision-making, and improve efficiency.",
  },
  {
    title: "Smart City Solutions",
    description:
      "Implement intelligent infrastructure, IoT-enabled monitoring, and automation for urban development.",
  },
  {
    title: "Blockchain Security & Digital Trust",
    description:
      "Ensure secure, decentralized, and transparent transactions with our blockchain-powered solutions.",
  },
  {
    title: "Cloud Computing & Scalability",
    description:
      "Deliver high-performance, scalable cloud infrastructure tailored to your business needs.",
  },
  {
    title: "Custom Software Development",
    description:
      "Build robust, scalable, and innovative software solutions designed to meet your business objectives.",
  },
  {
    title: "Workforce Training & Consulting",
    description:
      "Upskill teams with AI, ML, and digital transformation expertise to stay ahead in the industry.",
  },
];

export default Services;
