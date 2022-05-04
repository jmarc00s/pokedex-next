import React from "react";

const FabButton = ({ icon, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 bg-gray-50 
                  text-gray-700
                  rounded-full hover:bg-gray-100
                  fixed right-5 bottom-10
                  flex justify-center items-center`}
      title={title}
    >
      <span className="w-8 h-8">{icon}</span>
    </button>
  );
};

export default FabButton;
