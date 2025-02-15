import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "We build high-quality, scalable websites using the latest technologies.",
    image: "/image/web-dev.svg",
  },
  {
    title: "Mobile App Development",
    description: "Create feature-rich mobile apps for iOS and Android platforms.",
    image: "/image/app-dev.svg",
  },
  {
    title: "UI/UX Design",
    description: "Stunning designs to enhance user experience and engagement.",
    image: "/image/ui-ux.svg",
  },
  {
    title: "Digital Marketing",
    description: "SEO, PPC, and social media marketing to grow your online presence.",
    image: "/image/marketing.svg",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud computing services tailored for businesses.",
    image: "/image/cloud.svg",
  },
  {
    title: "IT Consulting",
    description: "Strategic IT solutions to optimize and modernize your business.",
    image: "/image/consulting.svg",
  },
];

const Services: React.FC = () => {
  return (
    <div className="mt-8 relative min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 py-16 px-6"> 
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">🚀 Our Services</h2>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          We offer a wide range of digital solutions to help your business grow.
        </p>
      </div>

      {/* Service Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          >
            <img src={service.image} alt={service.title} className="h-24 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <div className="mt-4">
              {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Learn More
              </button> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
