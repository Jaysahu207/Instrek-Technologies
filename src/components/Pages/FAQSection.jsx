import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Icon for expand/collapse

const faqData = [
  {
    question: "What cloud services does Instrek Technologies offer?",
    answer:
      "Instrek Technologies provides a range of cloud solutions, including cloud infrastructure, migration, security, DevOps automation, and AI-driven analytics.",
  },
  {
    question: "How does Instrek Technologies ensure cloud security?",
    answer:
      "We implement industry-leading security measures such as encryption, firewalls, identity access management, and compliance solutions to safeguard your data and operations.",
  },
  {
    question: "Can Instrek Technologies help with cloud migration?",
    answer:
      "Yes, our cloud migration services ensure a seamless transition from on-premises systems to cloud environments with minimal downtime and optimized performance.",
  },
  {
    question:
      "What are the benefits of using Instrek Technologies' cloud solutions?",
    answer:
      "Our cloud solutions offer scalability, cost efficiency, enhanced security, high availability, and AI-powered insights to drive business growth and innovation.",
  },
  {
    question: "Does Instrek Technologies provide DevOps automation?",
    answer:
      "Yes, we streamline cloud deployments through CI/CD pipelines, Infrastructure as Code (IaC), and automation tools, ensuring efficiency and reliability.",
  },
  {
    question: "How does Instrek Technologies support AI and data analytics?",
    answer:
      "We offer AI-driven analytics and machine learning solutions to help businesses gain actionable insights and optimize decision-making processes.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-24 px-6 lg:px-20 text-black">
      <motion.div
        className="container mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-900">
          Instrek Technologies Cloud FAQs
        </h2>
        <p className="text-lg text-center text-gray-700 mb-10">
          Get answers to frequently asked questions about our cloud solutions
          and services.
        </p>

        {/* FAQ Items */}
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center bg-gray-100 px-6 py-4 rounded-lg shadow-md hover:bg-gray-200 transition-all duration-300"
            >
              <span className="text-lg font-medium text-gray-900">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden bg-gray-50 px-6 py-4 rounded-b-lg shadow-md"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQSection;
