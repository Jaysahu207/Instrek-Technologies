import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      className="bg-white text-white px-4 py-24 md:px-10 lg:px-20 xl:px-28 shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
        What Our Customers Say
      </h2>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="relative p-6 md:p-8 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-black hover:shadow-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <img
                src={testimonial.image || "https://via.placeholder.com/64"}
                alt={testimonial.name}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="mt-10 text-center">
              <h3 className="text-lg md:text-xl font-semibold">
                {testimonial.name}
              </h3>
              <p className="text-blue-400 text-sm">{testimonial.role}</p>
            </div>
            <p className="text-gray-300 text-sm md:text-lg italic mt-4 leading-relaxed text-center">
              "{testimonial.quote}"
            </p>
          </motion.div>
        ))}
      </div>
      <div className="md:hidden">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6">
              <motion.div
                className="relative p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-black hover:shadow-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <img
                    src={testimonial.image || "https://via.placeholder.com/64"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="mt-10 text-center">
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-blue-400 text-sm">{testimonial.role}</p>
                </div>
                <p className="text-gray-300 text-sm italic mt-4 leading-relaxed text-center">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Testimonials;

const testimonials = [
  {
    id: 1,
    name: "Aarav Mehta",
    role: "AI & IoT Engineer",
    quote:
      "Instrek Technologies' AI-driven solutions have revolutionized the way we integrate automation in smart cities.",
    image:
      "https://cdn.pixabay.com/photo/2022/08/21/22/29/smile-7402270_1280.jpg",
  },
  {
    id: 2,
    name: "Neha Verma",
    role: "Blockchain Developer",
    quote:
      "Instrek's blockchain solutions have enhanced security and transparency in our digital transactions.",
    image:
      "https://cdn.pixabay.com/photo/2020/03/12/16/51/women-4925683_1280.jpg",
  },
  {
    id: 3,
    name: "Rohan Malhotra",
    role: "Cloud Solutions Architect",
    quote:
      "Instrek Technologies provides cutting-edge cloud solutions, ensuring seamless scalability and performance.",
    image:
      "https://cdn.pixabay.com/photo/2019/08/29/09/00/men-4438572_1280.jpg",
  },
  {
    id: 4,
    name: "Meera Iyer",
    role: "E-commerce Specialist",
    quote:
      "With Instrek's AI-powered insights, our e-commerce platform now delivers a personalized shopping experience.",
    image:
      "https://cdn.pixabay.com/photo/2020/06/19/06/27/women-5315852_1280.jpg",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Cybersecurity Analyst",
    quote:
      "Instrek Technologies has strengthened our security framework with its advanced AI-driven threat detection.",
    image:
      "https://cdn.pixabay.com/photo/2019/10/14/19/59/young-4549901_1280.jpg",
  },
  {
    id: 6,
    name: "Ananya Rao",
    role: "Data Scientist",
    quote:
      "Instrek’s data-driven strategies have empowered businesses to make insightful, real-time decisions.",
    image:
      "https://cdn.pixabay.com/photo/2022/11/10/07/15/portrait-7582123_1280.jpg",
  },
];
