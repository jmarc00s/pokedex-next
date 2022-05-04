import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="relative min-h-full py-5 bg-gray-200">
      <div className="container mx-auto">{children}</div>
    </main>
  );
};

export default Layout;
