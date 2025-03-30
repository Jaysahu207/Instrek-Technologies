import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckSquare, Square } from "lucide-react"; // Lucide icons
//all images
import img1 from "../../assets/serviceImages/1.jpg";
import img2 from "../../assets/serviceImages/2.jpg";
import img3 from "../../assets/serviceImages/3.jpg";
import img4 from "../../assets/serviceImages/4.jpg";
import img5 from "../../assets/serviceImages/5.jpg";
import img6 from "../../assets/serviceImages/6.jpg";
import img7 from "../../assets/serviceImages/7.jpg";
import img8 from "../../assets/serviceImages/8.jpg";
import img9 from "../../assets/serviceImages/9.jpg";
import img10 from "../../assets/serviceImages/10.jpg";
import img11 from "../../assets/serviceImages/11.jpg";
import img12 from "../../assets/serviceImages/12.jpg";
import img13 from "../../assets/serviceImages/13.jpg";
import img14 from "../../assets/serviceImages/14.jpg";
import img15 from "../../assets/serviceImages/15.jpg";
import img16 from "../../assets/serviceImages/16.jpg";
import img17 from "../../assets/serviceImages/17.jpg";
import img18 from "../../assets/serviceImages/18.jpg";

// all logos
import log1 from "../../assets/serviceLogos/1.png";
import log2 from "../../assets/serviceLogos/2.png";
import log3 from "../../assets/serviceLogos/3.png";
import log4 from "../../assets/serviceLogos/4.png";
import log5 from "../../assets/serviceLogos/5.png";
import log6 from "../../assets/serviceLogos/6.png";
import log7 from "../../assets/serviceLogos/7.png";
import log8 from "../../assets/serviceLogos/8.png";
import log9 from "../../assets/serviceLogos/9.png";
import log10 from "../../assets/serviceLogos/10.png";
import log11 from "../../assets/serviceLogos/11.png";
import log12 from "../../assets/serviceLogos/12.png";
import log13 from "../../assets/serviceLogos/13.png";
import log14 from "../../assets/serviceLogos/14.png";
import log15 from "../../assets/serviceLogos/15.png";
import log16 from "../../assets/serviceLogos/16.png";
import log17 from "../../assets/serviceLogos/17.png";
import log18 from "../../assets/serviceLogos/18.png";
import log19 from "../../assets/serviceLogos/19.png";

//all icons for services data
import icon1 from "../../assets/serviceIcons/addition.jpg";
import icon2 from "../../assets/serviceIcons/arrow.jpg";
import icon3 from "../../assets/serviceIcons/circle.jpg";
import icon4 from "../../assets/serviceIcons/menu.jpg";

const services = [
  {
    id: 1,
    title: "Conversational & Agentic AI",
    description:
      "Enhance customer engagement with intelligent, AI-powered virtual assistants and automation.",
    icon: icon1,
  },
  {
    id: 2,
    title: "AIoT Solutions",
    description:
      "Combine AI and IoT to create smart, automated systems for industries and smart cities.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Blockchain & Digital Security",
    description:
      "Ensure data integrity, transparency, and security with cutting-edge blockchain solutions.",
    icon: icon3,
  },
  {
    id: 4,
    title: "Cloud & Digital Transformation",
    description:
      "Drive business growth with cloud solutions, automation, and scalable digital strategies.",
    icon: icon4,
  },
];

const dropdownData = [
  {
    title: "AI & Automation",
    content: [
      {
        title: "Conversational AI",
        description:
          "AI-powered chatbots and virtual assistants.\nEnhance customer interactions.\nAutomate business processes.",
        image: img1,
        logo: log1, // Conversational AI icon
      },
      {
        title: "Agentic AI",
        description:
          "AI-driven decision-making.\nEmpower autonomous digital agents.\nOptimize operational efficiency.",
        image: img2,
        logo: log2, // Agentic AI icon
      },
      {
        title: "AI for Enterprises",
        description:
          "Custom AI solutions for businesses.\nImprove productivity and automation.\nDrive AI-led digital transformation.",
        image: img3,
        logo: log3, // AI for Enterprises icon
      },
    ],
  },
  {
    title: "IoT & AIoT Solutions",
    content: [
      {
        title: "Smart Infrastructure",
        description:
          "AIoT-powered city automation.\nIntelligent traffic management.\nEnergy-efficient solutions.",
        image: img4,
        logo: log4, // Smart Infrastructure icon
      },
      {
        title: "Industry 4.0",
        description:
          "Automated manufacturing with AIoT.\nPredictive maintenance.\nReal-time analytics for efficiency.",
        image: img5,
        logo: log5, // Industry 4.0 icon
      },
      {
        title: "Connected Devices",
        description:
          "Seamless device-to-device communication.\nIoT-enabled smart home solutions.\nAdvanced monitoring systems.",
        image: img6,
        logo: log6, // Connected Devices icon
      },
    ],
  },
  {
    title: "Blockchain & Cybersecurity",
    content: [
      {
        title: "Decentralized Applications",
        description:
          "Secure and transparent blockchain-based apps.\nEliminate intermediaries.\nEnhance digital trust.",
        image: img7,
        logo: log7, // Decentralized Apps icon
      },
      {
        title: "Data Encryption & Privacy",
        description:
          "End-to-end encryption for security.\nProtect sensitive information.\nComply with global data regulations.",
        image: img8,
        logo: log8, // Data Encryption icon
      },
      {
        title: "Threat Detection & AI Security",
        description:
          "AI-powered threat monitoring.\nPrevent cyberattacks.\nReal-time security analysis.",
        image: img9,
        logo: log9, // Threat Detection icon
      },
    ],
  },
  {
    title: "Cloud & Digital Transformation",
    content: [
      {
        title: "Cloud Consulting",
        description:
          "Seamless cloud adoption strategy.\nOptimize performance and cost.\nEnsure secure cloud migration.",
        image: img10,
        logo: log10, // Cloud Consulting icon
      },
      {
        title: "Edge Computing",
        description:
          "Process data closer to the source.\nReduce latency and bandwidth usage.\nEnhance real-time AI applications.",
        image: img11,
        logo: log11, // Edge Computing icon
      },
      {
        title: "Data Analytics & Insights",
        description:
          "Leverage AI for advanced analytics.\nGain actionable business insights.\nMake data-driven decisions.",
        image: img12,
        logo: log12, // Data Analytics icon
      },
    ],
  },
  {
    title: "Workforce AI & Consulting",
    content: [
      {
        title: "AI-Powered Talent Acquisition",
        description:
          "Automate hiring processes.\nFind the right talent using AI.\nImprove recruitment efficiency.",
        image: img13,
        logo: log13, // AI Hiring icon
      },
      {
        title: "Workforce Training & Upskilling",
        description:
          "Equip employees with AI skills.\nEnhance digital literacy.\nPrepare for an AI-driven future.",
        image: img14,
        logo: log14, // Training icon
      },
      {
        title: "Enterprise AI Strategy",
        description:
          "Custom AI roadmaps for businesses.\nDrive innovation with AI solutions.\nOptimize digital transformation.",
        image: img15,
        logo: log15, // AI Strategy icon
      },
    ],
  },
  {
    title: "Disaster Recovery & AI Resilience",
    content: [
      {
        title: "AI-Driven Risk Management",
        description:
          "Predict and mitigate risks with AI.\nEnsure business continuity.\nEnhance disaster recovery strategies.",
        image: img16,
        logo: log16, // Risk Management icon
      },
      {
        title: "Automated Data Backups",
        description:
          "Secure cloud-based backups.\nInstant data recovery.\nPrevent data loss and downtime.",
        image: img17,
        logo: log17, // Data Backup icon
      },
      {
        title: "AI-Powered Cyber Defense",
        description:
          "Proactive threat detection.\nSecure enterprise infrastructure.\nMinimize cyber risks.",
        image: img18,
        logo: log18, // AI Cyber Defense icon
      },
    ],
  },
];

const serviceHighlights = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description:
      "Empowering businesses with AI-driven automation and intelligent insights.",
    icon: icon1,
  },
  {
    id: 2,
    title: "IoT & AIoT Solutions",
    description:
      "Seamless integration of AI with IoT to build smarter ecosystems.",
    icon: icon2,
  },
  {
    id: 3,
    title: "Blockchain Solutions",
    description:
      "Secure, decentralized, and transparent blockchain applications.",
    icon: icon3,
  },
];

const ServicesPage = () => {
  const [activeHeader, setActiveHeader] = useState(0); // Default to first category

  return (
    <section className="py-20 bg-gray-100 " id="servicespage">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-blue-900 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Services and Solutions
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We offer a wide range of services and solutions to help businesses
          leverage the power of AI, IoT, and blockchain technology.
        </motion.p>

        {/* Featured Services */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* <div className="mb-3 text-amber-300">{service.icon}</div> */}
              <img src={service.icon} alt="" className="w-18 h-18" />
              <h3 className="text-2xl font-semibold text-blue-800">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Free Credits Banner */}
        <motion.div
          className="mt-16 bg-gray-900 text-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold">
            Get Free Credits Now! Unlock AI, IoT, and Blockchain Solutions
          </h3>
          <p className="mt-3 text-lg">
            Sign up for a free trial and experience the power of AI, IoT, and
            blockchain technology.
          </p>
          <button className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold transition hover:bg-blue-200 hover:scale-105">
            Get Started
          </button>
        </motion.div>

        {/* Left-Aligned Dropdown with Right-Side Cards */}
        {/* Top-Aligned Categories with Content Below */}
        <div className="mt-20 w-full max-w-7xl mx-auto ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-gray-200"
          >
            {dropdownData.map((section, index) => (
              <motion.button
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform cursor-pointer 
          ${
            activeHeader === index
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105"
              : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white hover:shadow-lg"
          }`}
                onClick={() => setActiveHeader(index)}
              >
                {section.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Content (Now Below the Categories) */}
          <div className="mt-8">
            {activeHeader !== null && (
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Heading */}
                <motion.h1
                  key={activeHeader}
                  className="text-4xl font-bold text-black text-center mt-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {dropdownData[activeHeader].title}
                </motion.h1>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dropdownData[activeHeader].content.map((item, i) => (
                    <motion.div
                      key={i}
                      className="relative  rounded-xl shadow-lg overflow-hidden group transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      style={{ height: "400px", width: "100%" }} // Increased card height
                    >
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 object-cover" // Increased image height
                      />

                      {/* Outer Title */}
                      <div className="p-6 bg-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 font-poppins tracking-wide">
                          {item.title}
                        </h3>
                      </div>

                      {/* Inner Card (Appears on Hover) */}
                      <motion.div className="absolute bottom-0 left-0 w-full h-60 bg-gray-50 p-6 rounded-t-xl shadow-lg opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-600 ease-in-out ">
                        <div className="flex justify-center">
                          <img
                            src={item.logo}
                            alt="Logo"
                            className="w-26 h-24 object-contain"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-blue-900 font-roboto">
                          {item.title}
                        </h4>
                        <div className="text-gray-700 mt-2 text-sm font-inter leading-relaxed">
                          {item.description.split("\n").map((point, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckSquare className="text-blue-500 w-5 h-5" />{" "}
                              {/* Checked box */}
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Service Highlights Section */}
        <motion.div
          className="mt-20 bg-white p-12 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-black text-center mb-8">
            Service Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((highlight) => (
              <motion.div
                key={highlight.id}
                className="p-6  rounded-lg shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
                whileHover={{ scale: 1.05 }}
              >
                {/* <div className="mb-4">{highlight.icon}</div> */}
                <img src={highlight.icon} alt="" className="h-24 w-24  " />
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-700">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
