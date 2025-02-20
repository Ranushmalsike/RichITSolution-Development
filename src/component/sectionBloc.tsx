import React from "react";
import { motion } from "framer-motion";
import { services } from "../config/serviceDetail";

const SectionBloc: React.FC = () => {
  return (
    <div
      className="relative p-6 overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='1440' height='560' viewBox='0 0 1440 560'%3e%3cg fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(185, 178, 178, 1)'/%3e%3cpath d='M0,545.624C103.252,528.919,115.275,372.731,201.352,313.31C282.738,257.127,412.446,293.268,475.694,217.242C540.269,139.62,563.864,17.645,524.77,-75.451C485.808,-168.234,360.945,-181.99,281.895,-244.263C221.739,-291.652,187.156,-367.305,116.574,-397.016C41.698,-428.534,-41.095,-425.053,-121.593,-414.107C-213.333,-401.633,-322.572,-401.909,-380.222,-329.464C-437.925,-256.954,-403.142,-150.857,-404.815,-58.204C-406.268,22.257,-416.156,101.935,-389.381,177.824C-360.898,258.554,-310.315,327.239,-248.082,386.023C-175.122,454.939,-99.074,561.653,0,545.624' fill='%23877b7b'/%3e%3c/g%3e%3c/svg%3e")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto p-6 relative">
        <center>
          <motion.h2
            className="text-2xl font-semibold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Top Services
          </motion.h2>
        </center>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <img
                src={service.image}
                className="w-full h-[200px] object-cover rounded-md"
                alt={service.title}
              />
              <h3 className="text-lg font-bold mt-2">{service.title}</h3>
              {/* <a
                href="/contactus"
                className="mt-4 inline-block bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Contact Us
              </a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionBloc;
