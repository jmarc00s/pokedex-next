import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 text-gray-100 bg-blue-700 rounded-sm shadow-lg hover:bg-blue-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
