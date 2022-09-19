import React, { useEffect, useState } from "react";
import ButtonComponent from "../bttn/ButtonComponent";
import { useForm } from "react-hook-form";
import axios from "axios";
const UserAddForm = ({
  getUsers,
  handleClose,
  userSelect,
  setStatus,
  userUnselect,
  statusForm,
  setStatusUpdate,
}) => {
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    if (userSelect) {
      reset(userSelect);
    }
  }, []);
  const submit = (data) => {
    if (userSelect) {
      axios
        .put(`https://users-crud1.herokuapp.com/users/${userSelect.id}/`, data)
        .then(() => getUsers())
        .then(() => setStatusUpdate())
        .then(() => handleClose())
        .catch((error) => console.log(error.response));
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", data)
        .then(() => setStatus())
        .then(() => getUsers())
        .then(() => handleClose())
        .catch((error) => console.log(error.response));
    }
    clearForm();
  };
  const clearForm = () => {
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    userUnselect();
  };
  return (
    <form
      className="flex flex-col w-full p-5 gap-3 items-center text-content"
      onSubmit={handleSubmit(submit)}
    >
      <h2 className="text-content-title font-bold rounded-md">
        {statusForm ? "New User" : "Eddit User"}
      </h2>
      <div className="w-full flex flex-col ">
        <label className="capitalize font-semibold" htmlFor="first_name">
          first name:
        </label>
        <input
          className="border h-[30px] rounded-sm border-gray-variant-2"
          placeholder="Your Name"
          type="text"
          id="first_name"
          {...register("first_name")}
        />
      </div>
      <div className="w-full flex flex-col">
        <label className="capitalize font-semibold" htmlFor="last_name">
          last name:
        </label>
        <input
          className="border h-[30px] rounded-sm border-gray-variant-2"
          placeholder="Your Last Name"
          type="text"
          id="last_name"
          {...register("last_name")}
        />
      </div>
      <div className="w-full flex flex-col">
        <label className="capitalize font-semibold" htmlFor="email">
          email:
        </label>
        <input
          className="border h-[30px] rounded-sm border-gray-variant-2"
          placeholder="Your email"
          type="email"
          id="email"
          {...register("email")}
        />
      </div>
      <div className="w-full flex flex-col">
        <label className="capitalize font-semibold" htmlFor="password">
          password:
        </label>
        <input
          placeholder="Your password"
          className="border h-[30px] rounded-sm border-gray-variant-2"
          type="password"
          id="password"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="capitalize font-semibold" htmlFor="birthday">
          birthday:
        </label>
        <input
          placeholder="Your birthday"
          className="border h-[30px] rounded-sm border-gray-variant-2"
          type="date"
          id="birthday"
          {...register("birthday")}
        />
      </div>
      <div className="flex w-full justify-around items-center">
        <ButtonComponent
          text={statusForm ? "Add User" : "Save Change"}
          className="capitalize"
          type="submit"
     
        />
        {statusForm && (
          <ButtonComponent
            text="Clear Form"
            className="capitalize bg-secondary-color text-white-variant"
            type="button"
            onClick={clearForm}
          />
        )}
      </div>
    </form>
  );
};

export default UserAddForm;
