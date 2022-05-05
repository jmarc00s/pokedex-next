import { useRef } from "react";

export function useDebounce(fn, debounceTime = 300) {
  const timer = useRef(null);

  function debounce(...args) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fn(...args);
    }, debounceTime);
  }

  return debounce;
}
