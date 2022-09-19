import React from "react";
import { motion } from "framer-motion";
import UserAddForm from "../form/UserAddForm";
import dropIn from "../../utils/transtion";
const DropButton = ({
  onClick,
  handleClose,
  data,
  setStatus,
  userSelect,
  userUnselect,
  statusForm,
  setStatusUpdate,
}) => {
  return (
    <motion.div
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute flex top-0 left-0 h-screen w-full  overflow-hidden items-center justify-center  bg-[#00000062]"
    >
      <motion.div
        className="relative flex flex-col items-center rounded-md m-auto bg-white-variant w-[90%] md:w-1/3"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.button
          whileHover={{
            transition: { duration: 0.2, delay: 0.1 },
            backgroundColor: "#777ADF",
            color: "#FFFFFF",
            scale: 1.2,
          }}
          whileTap={{ scale: 1 }}
          type={"button"}
          onClick={onClick}
          className="absolute bg-primary-color right-2 top-2 px-1.5 rounded-full text-gray-variant"
        >
          x
        </motion.button>
        <UserAddForm
          getUsers={data}
          setStatus={setStatus}
          handleClose={handleClose}
          userSelect={userSelect}
          userUnselect={userUnselect}
          statusForm={statusForm}
          setStatusUpdate={setStatusUpdate}
        />
      </motion.div>
    </motion.div>
  );
};

export default DropButton;
