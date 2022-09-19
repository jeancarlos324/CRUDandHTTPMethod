import React from "react";
import { motion } from "framer-motion";
import dropIn from "../../utils/transtion";
const PopUpReact = ({ setStatus }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute flex top-0 left-0 h-screen w-full  overflow-hidden items-center justify-center  bg-[#00000062]"
    >
      <motion.div
        className="relative flex items-center justify-center m-auto bg-white-variant p-4 gap-5 text-green-500 rounded-md"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <i className="fa-solid fa-check"></i>
        <span className="capitalize text-content-title">User was Added</span>
      </motion.div>
    </motion.div>
  );
};

export default PopUpReact;
