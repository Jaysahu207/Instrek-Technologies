import { useState } from "react";
import {
  X,
  Menu,
  ChevronDown,
  Cloud,
  Cpu,
  Database,
  Settings,
  RefreshCw,
  Server,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/HomeImages/instrek.png";
import { MdEmail, MdCall } from "react-icons/md";

const services = [
  {
    name: "Cloud Solutions",
    icon: <Cloud size={20} />,
    path: "cloud-solutions",
  },
  {
    name: "Server Management",
    icon: <Server size={20} />,
    path: "server-management",
  },
  {
    name: "Data Analytics",
    icon: <Database size={20} />,
    path: "data-analytics",
  },
  { name: "IT Consultancy", icon: <Cpu size={20} />, path: "it-consultancy" },
  {
    name: "Network Security",
    icon: <Settings size={20} />,
    path: "network-security",
  },
  {
    name: "Software Development",
    icon: <RefreshCw size={20} />,
    path: "software-development",
  },
  {
    name: "IoT Driven Digital Transformation",
    icon: <RefreshCw size={20} />,
    path: "iot-driven-digital-transformation",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black shadow-lg z-50 font-poppins ">
      <div className="container  mx-auto flex justify-between items-center px-6 py-4 md:py-5">
        {/* Brand Logo */}
        <motion.img
          src={logo}
          alt="Visys Cloud Solutions"
          onClick={() => navigate("/")}
          className="h-12 w-auto cursor-pointer"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-[18px] tracking-wide">
          <li className="group relative">
            <NavLink
              to="/"
              className="inline-block cursor-pointer transition duration-300 text-black hover:text-black"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </li>

          <li className="group relative">
            <NavLink
              to="/about"
              className="inline-block cursor-pointer transition duration-300 text-black hover:text-black"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="cursor-pointer transition duration-300 flex items-center gap-1 text-black hover:text-black">
              <span>Services</span>
              <motion.span
                animate={{ rotate: isServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </div>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-[300px] bg-white rounded-xl shadow-xl p-4 border border-black transition duration-300 hover:bg-gray-100"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <NavLink
                          to={`/services/${service.path}`}
                          className="flex items-center gap-6 px-4 py-2 rounded-lg transition duration-300 bg-white hover:bg-gray-400"
                        >
                          <span className="text-black">{service.icon}</span>
                          <span className="text-lg font-medium text-gray-800">
                            {service.name}
                          </span>
                        </NavLink>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          <li className="group relative">
            <NavLink
              to="/testimonials"
              className="inline-block cursor-pointer transition duration-300 text-black hover:text-black"
            >
              Trainings
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </li>

          <li className="group relative">
            <NavLink
              to="/testimonials"
              className="inline-block cursor-pointer transition duration-300 text-black hover:text-black"
            >
              Testimonial
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </NavLink>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex justify-center space-x-3 md:space-x-5">
          <motion.a
            href="mailto:tithika.mittal@instrek.com"
            className="flex items-center gap-2 bg-white text-black px-4 md:px-5 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-300 shadow-lg border border-black text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdEmail size={20} /> Contact Us
          </motion.a>

          <motion.a
            href="/contact"
            className="flex items-center gap-2 bg-white text-black px-4 md:px-5 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-300 shadow-lg border border-black text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdCall size={20} /> Schedule Call
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={32} className="text-white" />
        </button>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 bg-black bg-opacity-95 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-xl z-50 overflow-y-auto`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={32} className="text-white" />
          </button>
        </div>

        {/* Navigation */}
        <ul className="mt-6 space-y-6 p-6 text-lg">
          <li>
            <NavLink
              to="/"
              className="block py-2 cursor-pointer hover:text-gray-400 transition"
            >
              Home
            </NavLink>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <div className="cursor-pointer hover:text-gray-500 transition duration-300 flex items-center justify-between">
              <span>Services</span>
              <motion.span animate={{ rotate: isServicesOpen ? 180 : 0 }}>
                <ChevronDown size={18} />
              </motion.span>
            </div>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  className="mt-2 w-full bg-white text-black rounded-xl shadow-lg p-4 border border-gray-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <NavLink
                        to={`/services/${service.name
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="flex items-center gap-6 px-4 py-2 rounded-lg transition duration-300 bg-white hover:bg-gray-800"
                      >
                        <span className="text-black">{service.icon}</span>
                        <span>{service.name}</span>
                      </NavLink>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <NavLink
              to="/about"
              className="block py-2 cursor-pointer hover:text-gray-400 transition"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              className="block py-2 cursor-pointer hover:text-gray-400 transition"
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/testimonials"
              className="block py-2 cursor-pointer hover:text-gray-400 transition"
            >
              Testimonials
            </NavLink>
          </li>
        </ul>

        {/* Mobile Buttons */}
        <div className="p-6 flex flex-col space-y-4">
          <motion.a
            href="/contact"
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 shadow-lg border border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
          >
            <MdEmail size={24} /> Contact Us
          </motion.a>

          <motion.a
            href="/contact"
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition duration-300 shadow-lg border border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(false)}
          >
            <MdCall size={24} /> Schedule Call
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
