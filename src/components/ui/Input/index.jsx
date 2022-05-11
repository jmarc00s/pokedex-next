import React, { useState } from "react";
import Loading from "../../loading";
import { useDebounce } from "../../../core/hooks/useDebounce";

const Input = ({ onChange, loading, ...rest }) => {
  const sendDebouncedValue = useDebounce(onChange);
  const [displayedValue, setDisplayedValue] = useState("");

  const handleChange = (value) => {
    setDisplayedValue(value);
    sendDebouncedValue(value);
  };

  return (
    <div className="relative">
      <input
        value={displayedValue}
        className={`
          px-2 py-1 text-xl rounded-md 
          outline-none focus:ring-2 focus:ring-blue-200
          shadow-md w-full
        `}
        onChange={({ target }) => handleChange(target.value)}
        disabled={loading}
        {...rest}
      />
      <div className="absolute top-0 right-0">{loading && <Loading />}</div>
    </div>
  );
};

export default Input;
