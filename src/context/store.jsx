"use client";

import React, { createContext, useState } from "react";

const GlobalContext = createContext({
  value: "light",
  setValue: () => {},
});

export const GlobalProvider = ({ children }) => {
  const [value, setValue] = useState("light");

  return (
    <GlobalContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
