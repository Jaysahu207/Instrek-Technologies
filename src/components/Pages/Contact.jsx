import React, { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";

import CalendarForm from "../elements/CalendarForm";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    appointmentDate: "",
    message: "",
  });

  const [selectedDate, setSelectedDate] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/form", {
        ...formData,
        appointmentDate: selectedDate ? format(selectedDate, "yyyy-MM-dd") : "",
      });

      console.log("Form submitted successfully:", response.data);

      // Show success toast
      toast.success("Appointment booked successfully!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        appointmentDate: "",
        message: "",
      });

      setSelectedDate(null);
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error toast
      toast.error("Error booking appointment. Please try again!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <section id="contact">
      <div className="bg-black py-20 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-5xl font-bold text-center text-white">
            Get Free Consultation
          </h2>
          <p className="mt-4 text-white text-lg text-center">
            Not sure where and how to implement Cloud in your business? Consult
            with our Cloud experts for free.
          </p>

          {/* Flex container for form and image */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-10">
            {/* Consultation Form */}
            <motion.div
              className="w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full p-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-cyan-400 outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email here"
                    className="w-full p-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-cyan-400 outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-cyan-400 outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Date of Appointment
                  </label>
                  <input
                    type="text"
                    placeholder="Select Date from Calendar"
                    value={
                      selectedDate ? format(selectedDate, "dd-MM-yyyy") : ""
                    }
                    readOnly
                    className="w-full p-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-cyan-400 outline-none"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message/Comment
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="4"
                    className="w-full p-3 border rounded-lg text-gray-900 focus:ring-2 focus:ring-cyan-400 outline-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black hover:bg-cyan-300 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Book an Appointment
                </button>

                <p className="mt-6 text-gray-400 text-center">
                  Or email us at{" "}
                  <span className="text-black font-semibold">
                    tithika.mittal@instrek.com.
                  </span>
                </p>
              </form>
            </motion.div>

            {/* Calendar */}
            <motion.div
              className="w-full max-w-lg flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <CalendarForm setSelectedDate={setSelectedDate} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
