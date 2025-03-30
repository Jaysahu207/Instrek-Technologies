import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import iotImage from "../../assets/services/ist.jpg";
import { useNavigate } from "react-router-dom";

const IoTDrivenDigitalTransformation = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Services navigation
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

  // IoT features
  const features = [
    {
      title: "Real-Time Data Processing",
      description: "Harness IoT for instant decision-making.",
      icon: "📡",
    },
    {
      title: "Connected Smart Devices",
      description: "Seamless device-to-device communication.",
      icon: "🔗",
    },
    {
      title: "AI-Powered IoT Analytics",
      description: "Leverage AI for deep insights.",
      icon: "🤖",
    },
    {
      title: "Scalability & Security",
      description: "Expand with confidence and security.",
      icon: "🔒",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  IoT-Driven Digital Transformation
                </h1>
                <p className="text-xl text-gray-600">
                  Revolutionizing industries with intelligent, interconnected
                  systems.
                </p>
              </div>
              <div className="mb-12">
                <img
                  src={iotImage}
                  alt="IoT Solutions"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
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
              <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-600">
                  Why Choose Our IoT Solutions?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Faster decision-making with real-time data",
                    "Enhanced automation and efficiency",
                    "Secure and scalable IoT deployments",
                    "Expert guidance in IoT strategy",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="relative">
            <div
              className="lg:col-span-1 sticky top-20"
              style={{ height: "fit-content", alignSelf: "flex-start" }}
            >
              <h2 className="text-2xl font-bold mb-6">Our Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Link key={index} to={service.path} className="block">
                    <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">
                          {service.name}
                        </span>
                        <svg
                          className="w-5 h-5 text-gray-500"
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
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-black text-white p-8 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Transform with IoT</h2>
          <p className="text-xl mb-6">
            Contact us for a consultation on IoT-driven digital transformation.
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

export default IoTDrivenDigitalTransformation;
