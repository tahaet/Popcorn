import { useState, useEffect } from "react";

export function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(() =>
    JSON.parse(window.localStorage.getItem(key))
  );
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value ? value : initialValue, setValue];
}
