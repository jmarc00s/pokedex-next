import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="bg-gray-200">
      <div className="container mx-auto">{children}</div>
    </main>
  );
};

export default Layout;
