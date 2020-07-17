import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
// import axios from "axios";

export const useLocalStorage = (key, initialValue) => {
 
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }

  return [storedValue, setValue];

};

export default useLocalStorage;
