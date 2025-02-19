import React from "react";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const portfolioSections = [
    {
      title: "Basic Web Developing",
      items: [
        { name: "WHM", price: "$10 - $50/year", description: "Custom websites, e-commerce, and business solutions." },
        { name: "Cloud Hosting", price: "Contact Us", description: "Secure AWS cloud hosting with scalability." },
      ],
    },
    {
      title: "Advanced Web Developing",
      items: [
        { name: "WHM", price: "$45 - $100/year", description: "Reliable hosting services with 24/7 support." },
        { name: "Cloud Hosting", price: "Contact Us", description: "High-performance cloud hosting for businesses." },
      ],
    },
    {
      title: "Enterprise Web Developing",
      items: [
        { name: "WHM", price: "$50 - $200/year", description: "Expert guidance for your IT infrastructure and software needs." },
        { name: "Cloud Hosting", price: "Contact Us", description: "Enterprise-level AWS cloud hosting solutions." },
      ],
    },
  ];

  return (
    <motion.div 
      className="container mx-auto p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Price</h2>

      {/* Portfolio Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioSections.map((section, index) => (
          <motion.div 
            key={index} 
            className="border rounded-lg p-6 shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">{section.title}</h3>
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="p-4 border rounded-lg bg-gray-50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-green-600 font-semibold">{item.price}</p>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;

