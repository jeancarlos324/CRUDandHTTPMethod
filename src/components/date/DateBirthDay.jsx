import React from "react";

const DateBirthDay = ({ data }) => {
  var parts =data.split('-');
  var date = new Date(parts[0], parts[1] - 1, parts[2]);
  const day = new Intl.DateTimeFormat("es-ES", {
    day:"2-digit"
  }).format(date);
  const month = new Intl.DateTimeFormat("es-ES", {
    month: "short",
  }).format(date);
  return (
    <div className="flex flex-col justify-around items-center h-[90%] py-1 px-1">
      <span className="text-spam-title">{day}</span>
      <span className="uppercase">{month}</span>
    </div>
  );
};

export default DateBirthDay;
