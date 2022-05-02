import React from "react";

const Header = ({ children }) => {
  return (
    <>
      <h1 className="w-full text-center text-3xl text-gray-900 mb-3">
        {children}
      </h1>
      <hr />
    </>
  );
};

export default Header;
