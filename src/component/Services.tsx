import React from "react";
import { motion } from "framer-motion";
import { services } from "../config/serviceDetail";


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
            initial={{ opacity: 0, y: 50 }} // Start with the card slightly lower and hidden
            whileInView={{ opacity: 1, y: 0 }} // Fade in and move to its normal position when in view
            viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the card is in view
            transition={{ duration: 0.5 }}
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
            {/* Contact Us Section */}
      <motion.div 
        className="text-center mt-6 p-6 bg-blue/50 text-white rounded-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold">Need a Service? Contact Us!</h3>
        <p className="text-lg mt-2">
          Let’s build something amazing together. Reach out to us for a <strong>free consultation</strong>!
        </p>
        <a
          href="/contactus"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default Services;
