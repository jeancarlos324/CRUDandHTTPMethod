import React, { useEffect, useState } from "react";
import DropEvent from "./dropdown/DropEvent";
import ButtonComponent from "./bttn/ButtonComponent";
import axios from "axios";
import PopUpReact from "./popup/PopUpReact";
import UserList from "./list/UserList";
import PopUpDelete from "./popup/PopUpDelete";
import PopUpUpdate from "./popup/PopUpUpdate";
const BirthDay = () => {
  const [isActive, setIsActive] = useState(false);
  const [titleForm, setTitleForm] = useState(true);
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [isSuccesfully, setIsSuccesfully] = useState(false);
  const [isTrashed, setIsTrashed] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccesfully(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isSuccesfully]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUpdated(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isUpdated]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTrashed(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [isTrashed]);

  useEffect(() => {
    getUsers();
  }, []);
  const setStatus = () => {
    setIsSuccesfully(true);
  };
  const setStatusDelete = () => {
    setIsTrashed(true);
  };
  const setStatusUpdate = () => {
    setIsUpdated(true);
  };
  const isActiveForm = () => {
    setIsActive(false);
  };
  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };
  const selectedUser = (item) => {
    setUserSelected(item);
  };
  const unselectUser = () => setUserSelected(null);
  return (
    <div className="relative w-screen h-screen">
      <ButtonComponent
        className="absolute right-3 top-3 text-content font-semibold"
        text="+ Add New User"
        onClick={() => {
          setIsActive(true);
          setTitleForm(true);
        }}
        type="button"
      />
      {isUpdated && <PopUpUpdate />}
      {isSuccesfully && <PopUpReact/>}
      {isTrashed && <PopUpDelete />}
      {isActive && (
        <DropEvent
          onClick={isActiveForm}
          handleClose={isActiveForm}
          setStatus={setStatus}
          data={getUsers}
          userSelect={userSelected}
          userUnselect={unselectUser}
          statusForm={titleForm}
          setStatusUpdate={setStatusUpdate}
        />
      )}
      <UserList
        data={users}
        getUsers={getUsers}
        handleClose={() => setIsActive(true)}
        isTrashed={setStatusDelete}
        userSelect={selectedUser}
        titleFormStatus={() => setTitleForm(false)}
      />
    </div>
  );
};

export default BirthDay;
