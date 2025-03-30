import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import consulting from "../../assets/services/consulting.avif";
import { useNavigate } from "react-router-dom";
const ITConsulting = () => {
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
  // IT Consulting features
  const features = [
    {
      title: "Strategic Planning",
      description:
        "Expert guidance on IT strategy and digital transformation roadmaps",
      icon: "📋",
    },
    {
      title: "Technology Assessment",
      description:
        "Comprehensive evaluation of your current IT infrastructure and needs",
      icon: "🔍",
    },
    {
      title: "Process Optimization",
      description:
        "Streamline operations and improve efficiency through IT solutions",
      icon: "⚡",
    },
    {
      title: "IT Project Management",
      description:
        "Professional oversight and execution of technology initiatives",
      icon: "📊",
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
                  IT Consulting
                </h1>
                <p className="text-xl text-gray-600">
                  Expert guidance to optimize your technology investments and
                  drive digital transformation for sustainable business growth.
                </p>
              </div>
              {/* Main image */} className="text-gray-600"
              <div className="mb-12">
                <img
                  src={consulting} // Ensure this path is correct for your project
                  alt="IT Consulting"
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
                <h2 className="text-2xl font-bold mb-4 text-gray-600">
                  Why Choose Our IT Consulting?
                </h2>
                <p className="text-gray-600 mb-6">
                  Our experienced consultants provide strategic guidance to help
                  your business leverage technology effectively. We focus on
                  delivering practical solutions that align with your business
                  objectives.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Experienced industry professionals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Customized technology solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Cost-effective implementation strategies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-600">
                      Ongoing support and guidance
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
                      service.name === "IT Consulting"
                        ? "border-2 border-black"
                        : ""
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`font-semibold ${
                          service.name === "IT Consulting"
                            ? "text-black"
                            : "text-black"
                        }`}
                      >
                        {service.name}
                      </span>
                      <svg
                        className={`w-5 h-5 ${
                          service.name === "IT Consulting"
                            ? "text-black"
                            : "text-gray-400"
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
          <h2 className="text-3xl font-bold mb-4">Get Expert IT Guidance</h2>
          <p className="text-xl mb-6">
            Contact us to schedule a consultation and discover how we can help
            transform your business.
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

export default ITConsulting;
