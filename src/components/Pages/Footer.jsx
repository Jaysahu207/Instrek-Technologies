import { motion } from "framer-motion";
import logo from "../../assets/HomeImages/instrek.png";
import { Link, NavLink } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";

<ul className="mt-3 space-y-2 text-gray-400">
  {[
    { name: "Cloud Infrastructure", id: "cloud-infrastructure" },
    { name: "Cloud Security & Compliance", id: "cloud-security" },
    { name: "AI & Data Analytics", id: "ai-data-analytics" },
    { name: "Cloud Migration & Consulting", id: "cloud-migration" },
    { name: "DevOps & Automation", id: "devops-automation" },
    { name: "Disaster Recovery Solutions", id: "disaster-recovery" },
    { name: "Multi-Cloud & Hybrid Cloud Management", id: "multi-cloud" },
  ].map((service, index) => (
    <li key={index}>
      <Link
        smooth
        to={`/services-page#${service.id}`}
        className="hover:text-white transition"
      >
        {service.name}
      </Link>
    </li>
  ))}
</ul>;

// import { NavLink, useLocation } from "react-router-dom";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <img
            src={logo}
            alt="Instrek Technologies Logo"
            className="h-16 border border-white border-solid border-2 rounded-1xl"
          />
          <h2 className="text-3xl font-bold text-white mt-6">
            Instrek Technologies
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            We are a leading provider of cloud-based solutions for businesses of
            all sizes. Our services include cloud infrastructure, security, data
            analytics, migration, and automation.
          </p>
          <p className="mt-3 text-gray-500">
            © {new Date().getFullYear()} Instrek Technologies. All rights
            reserved.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2 p-2 text-lg text-gray-400">
            {[
              "About",
              "Home",
              "Services",

              "Contact",
              "Testimonials",

              "FAQ",
            ].map((item) => (
              <li key={item} className="group relative">
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative inline-block cursor-pointer transition duration-300 hover:text-white"
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Cloud Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-white">
            instrek Services{" "}
          </h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            {[
              {
                name: "AI-Powered Cloud Automation",
                id: "ai-cloud-automation",
              },
              { name: "AIoT & Smart Infrastructure", id: "aiot-smart-infra" },
              {
                name: "Blockchain Security & Compliance",
                id: "blockchain-security",
              },
              {
                name: "Intelligent Cloud Migration & Consulting",
                id: "intelligent-migration",
              },
              {
                name: "Conversational AI & Agentic AI Solutions",
                id: "conversational-ai",
              },
              {
                name: "IoT-Driven Digital Transformation",
                id: "iot-digital-transformation",
              },
              {
                name: "Hybrid & Multi-Cloud AI Management",
                id: "hybrid-ai-cloud",
              },
            ].map((service, index) => (
              <li key={index}>
                <Link
                  smooth
                  to={`/services-page`}
                  className="hover:text-white transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-white flex items-center">
            Our Address
          </h3>
          <ul className="mt-3 space-y-3 text-gray-400">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className=" text-4xl mt-1" />
              <span>
                <strong className="text-white">India Location</strong>
                <br />
                912, Suryakiran Building, Connaught Place, Delhi, India.
              </span>
            </li>

            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-white text-xl" />
              <a
                href="tel:+91 9717600731"
                className="hover:text-white transition"
              >
                +91 9717600731
              </a>
            </li>

            <li className="flex items-center gap-4">
              <FaEnvelope className="text-white text-xl" />
              <a
                href="mailto:tithika.mittal@instrek.com."
                className="hover:text-white transition"
              >
                tithika.mittal@instrek.com.
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter & Appointment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 mt-6"
        >
          <h3 className="text-2xl font-semibold text-white">
            Subscribe & Stay Updated
          </h3>
          <p className="mt-3 text-gray-400">
            Get the latest cloud technology insights, updates, and security
            alerts.
          </p>

          {/* Email Subscription */}
          <form className="mt-4 flex flex-col sm:flex-row bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-white bg-gray-800 outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-300 transition"
            >
              Subscribe
            </motion.button>
          </form>

          {/* Appointment Button */}
          <div className="mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <Link
                to="/contact" // Update this with the correct path
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-300 transition-all"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="bg-gray-900 text-gray-400 py-4 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Centered Content */}
          <div className="text-center md:flex-1">
            <p className="text-md ">
              Designed & Developed by{" "}
              <a className="text-blue-400 hover:underline">
                Instrek Technologies
              </a>
            </p>
            <p className="text-xs mt-1">
              © 2025 Instrek Technologies. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
