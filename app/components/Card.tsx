import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Card;
