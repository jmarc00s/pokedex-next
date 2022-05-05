import React from "react";

const Input = ({ onChange, value, debounceTime = 500, ...rest }) => {
  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <input
      value={value}
      className={`
        px-2 py-1 text-xl rounded-md 
        outline-none focus:ring-2 focus:ring-blue-400
        shadow-md
      `}
      onChange={({ target }) => handleChange(target.value)}
      {...rest}
    />
  );
};

export default Input;
