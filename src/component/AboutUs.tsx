import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 mt-8">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">
          Founded in 2018, Rich IT has been at the forefront of digital transformation, delivering cutting-edge solutions in application development, web technologies, networking, IT consulting, and financial management. With a passion for innovation and a commitment to excellence, we empower businesses with smart, scalable, and efficient digital solutions.

Over the years, we have built a reputation for providing top-tier IT services that drive growth, efficiency, and success. Our team of highly skilled professionals works tirelessly to craft tailored solutions that meet the evolving needs of businesses across various industries.

At Rich IT, we believe in turning ideas into reality through technology. Whether you need custom software, a powerful online presence, robust IT infrastructure, or financial solutions, we have the expertise to make it happen.

Join us as we continue to innovate, evolve, and shape the future of digital excellence! 🚀
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {["Our Mission", "Our Vision"].map((title, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <p className="text-gray-700 mt-2">
              {title === "Our Mission"
                ? "At Rich IT, our mission is to empower businesses with cutting-edge technology solutions that drive innovation, efficiency, and growth. We specialize in application and web development, networking, IT consulting, and financial management, ensuring that our clients stay ahead in the ever-evolving digital landscape. Our goal is to provide scalable, secure, and intelligent solutions tailored to meet the unique needs of every business. Through expertise, creativity, and a customer-first approach, we strive to bridge technology with success, transforming ideas into powerful digital experiences."
                : "At Rich IT, we envision a future where technology seamlessly integrates with businesses to enhance efficiency, security, and innovation. Our goal is to become a global leader in application development, web solutions, networking, IT consulting, and financial management, empowering businesses with cutting-edge digital tools. We strive to create intelligent, future-proof solutions that drive growth, foster digital transformation, and set new industry standards. By embracing innovation and maintaining a customer-centric approach, we aim to shape the future of technology and business success."}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {["Expertise Across Industries", "Client-Centric Focus", "Cost-Effective Solutions"].map(
          (title, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-600 mt-2">
                {title === "Expertise Across Industries"
                  ? "With deep knowledge in application development, web solutions, networking, IT consulting, and financial management, we tailor solutions that meet diverse business needs."
                  : title === "Client-Centric Focus"
                  ? "Your success is our priority. We collaborate closely to ensure our solutions align with your goals, vision, and brand identity."
                  : "Get high-quality services at competitive prices, maximizing your return on investment."}
              </p>
            </motion.div>
          )
        )}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center bg-blue-600 text-white py-10 rounded-lg shadow-lg mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold">Let's Build Something Great Together!</h2>
        <p className="text-lg mt-2">Get in touch with us to start your next digital project.</p>
        <a
          href="/contactus"
          className="mt-4 inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded-full transition hover:bg-gray-200"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
};

export default AboutUs;

