import React, { useState } from "react";
import { useDebounce } from "../../core/hooks/useDebounce";

const Input = ({ onChange, ...rest }) => {
  const sendDebouncedValue = useDebounce(onChange);
  const [displayedValue, setDisplayedValue] = useState("");

  const handleChange = (value) => {
    setDisplayedValue(value);
    sendDebouncedValue(value);
  };

  return (
    <input
      value={displayedValue}
      className={`
        px-2 py-1 text-xl rounded-md 
        outline-none focus:ring-2 focus:ring-blue-200
        shadow-md
      `}
      onChange={({ target }) => handleChange(target.value)}
      {...rest}
    />
  );
};

export default Input;
