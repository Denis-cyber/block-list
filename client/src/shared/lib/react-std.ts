import { useState, useEffect } from "react";

export function useDebouncedValue<T>(value: T, timeout: number = 0) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, timeout);

    return () => clearTimeout(timer);
  }, [value, timeout]);

  return debounced;
}
