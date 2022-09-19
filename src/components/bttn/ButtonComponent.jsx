import React from "react";
import { motion } from "framer-motion";
const ButtonComponent = ({ onClick, className, type, text }) => {
  return (
    <motion.button
      whileHover={{
        transition: { duration: 0.2, delay: 0.1 },
        backgroundColor: "#575cdb",
        color: "#ffffff",
      }}
      whileTap={{ scale: 1.1 }}
      type={type}
      onClick={onClick}
      className={`${className} p-2 border-2 border-secondary-color text-secondary-color rounded-md`}
    >
      {text}
    </motion.button>
  );
};

export default ButtonComponent;
