import { motion } from "framer-motion";

interface DescriptionCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const DescriptionCard: React.FC<DescriptionCardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-12 gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left Side - Text Content */}
      <motion.div 
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">{description}</p>
      </motion.div>

      {/* Right Side - Animated Large Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.08 }}
      >
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-[350px] md:h-[450px] object-cover rounded-xl shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default DescriptionCard;
