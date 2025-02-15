import React from "react";
import { motion } from "framer-motion";
import { companyInfo } from "../config/CompanyDetails";

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 mt-20">
      {/* Page Title */}
      <motion.h2
        className="text-4xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        We’d love to hear from you! Reach out for any inquiries or support.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
                placeholder="Type your message..."
              ></textarea>
            </div>
            <motion.button
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className="flex flex-col space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
            <span className="text-blue-500 text-2xl">📍</span>
            <div>
              <h4 className="font-semibold text-gray-800">Our Address</h4>
              <p className="text-gray-600">{companyInfo.address}</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
            <span className="text-blue-500 text-2xl">📞</span>
            <div>
              <h4 className="font-semibold text-gray-800">Call Us</h4>
              <p className="text-gray-600">{companyInfo.phone}</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4">
            <span className="text-blue-500 text-2xl">✉️</span>
            <div>
              <h4 className="font-semibold text-gray-800">Email Us</h4>
              <p className="text-gray-600">{companyInfo.email}</p>
            </div>
          </div>

          {/* Optional Google Map Embed */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              className="w-full h-64 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450937!2d144.95373531568093!3d-37.81720974202152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2z44CSMzAwMCBBdXN0cmFsaWE!5e0!3m2!1sen!2sin!4v1632401579996!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
