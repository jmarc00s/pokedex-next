import React from "react";

const Header = ({ children }) => {
  return (
    <h1 className="w-full text-center text-3xl text-gray-900">{children}</h1>
  );
};

export default Header;
