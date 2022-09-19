import React from "react";
import { motion } from "framer-motion";
import DateBirthDay from "../date/DateBirthDay";
import axios from "axios";

const UserList = ({
  data,
  getUsers,
  isTrashed,
  userSelect,
  handleClose,
  titleFormStatus,
}) => {
  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => isTrashed())
      .then((res) => getUsers());
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="w-full text-spam-title font-semibold px-5">Users</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex bg-white-variant rounded-md items-center shadow-lg text-gray-variant pr-2"
          >
            <div className="h-full w-[20%] bg-yellow-variant rounded-l text-white-variant">
              <DateBirthDay data={item.birthday} />
            </div>
            <div className="w-[70%] p-2">
              <div className="text-content-title font-bold">
                {item.first_name}
              </div>
              <div className="text-content font-bold">{item.last_name}</div>
              <div className="flex gap-2 text-secondary-color">
                <i className="fa-solid fa-gift"></i>
                <div className="text-content">{item.birthday}</div>
              </div>
              <div className="flex gap-1">
                <span className="text-content font-bold capitalize">
                  email:
                </span>
                <div className="text-content italic">{item.email} </div>
              </div>
            </div>
            <div className="w-[10%] flex flex-col gap-2 pr-2 pt-2 h-full items-start ">
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="flex text-gray-variant p-1.5 border-2 rounded-md"
                onClick={() => {
                  userSelect(item);
                  handleClose();
                  titleFormStatus();
                }}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </motion.button>
              <motion.button
                whileTap={{ scale: 1.1 }}
                className="flex text-red-variant p-1.5 rounded-md border-2"
                onClick={() => deleteUser(item.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
