import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import network from "../../assets/services/network.webp";
import { useNavigate } from "react-router-dom";

const NetworkSecurity = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Array of all services for navigation
  const services = [
    { name: "Server Management", path: "/services/server-management" },
    { name: "Cloud Solutions", path: "/services/cloud-solutions" },
    { name: "Network Security", path: "/services/network-security" },
    { name: "Data Analytics", path: "/services/data-analytics" },

    { name: "IT Consulting", path: "/services/it-consultancy" },
    { name: "Software Development", path: "/services/software-development" },
    {
      name: "IoT-driven Digital Transformation",
      path: "/services/iot-driven-digital-transformation",
    },
  ];

  // Network security features
  const features = [
    {
      title: "Firewall Protection",
      description:
        "Advanced firewall systems to protect your network perimeter",
      icon: "🛡",
    },
    {
      title: "Threat Detection",
      description: "24/7 monitoring and real-time threat detection systems",
      icon: "🔍",
    },
    {
      title: "Data Encryption",
      description: "Enterprise-grade encryption for data security",
      icon: "🔒",
    },
    {
      title: "Access Control",
      description: "Robust user authentication and access management",
      icon: "🔑",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Left column - Main content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero section */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Network Security
                </h1>
                <p className="text-xl text-gray-600">
                  Protect your business with comprehensive network security
                  solutions designed to safeguard your digital assets and data.
                </p>
              </div>

              {/* Main image */}
              <div className="mb-12">
                <img
                  src={network} // Ensure this path is correct for your project
                  alt="Network Security"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Features grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md"
                  >
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Detailed information */}
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-600 ">
                  Why Choose Our Network Security?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our network security solutions provide comprehensive
                  protection against modern cyber threats. We implement multiple
                  layers of security to ensure your network remains secure and
                  your business stays protected.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Advanced threat detection and prevention
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Secure remote access solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Regular security audits and updates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Compliance with security standards
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right column - Services navigation */}
          <div
            className="lg:col-span-1"
            style={{
              position: "sticky",
              top: "20px",
              height: "fit-content",
              alignSelf: "flex-start",
            }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Services</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <Link key={index} to={service.path} className="block">
                  <div
                    className={`bg-white p-6 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg ${
                      service.name === "Network Security"
                        ? "border-2 border-black"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`font-semibold ${
                          service.name === "Network Security"
                            ? "text-black"
                            : "text-gray-800"
                        }`}
                      >
                        {service.name}
                      </span>
                      <svg
                        className={`w-5 h-5 ${
                          service.name === "Network Security"
                            ? "text-black"
                            : "text-black"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-black text-white p-8 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Secure Your Network Today</h2>
          <p className="text-xl mb-6">
            Contact us for a comprehensive security assessment of your network
            infrastructure.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NetworkSecurity;
