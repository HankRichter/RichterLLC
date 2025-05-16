import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-blue-900 text-white py-8 mt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center space-y-2">
        <p className="text-lg font-semibold">Richter Renovations</p>
        <p className="text-sm text-blue-200">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
