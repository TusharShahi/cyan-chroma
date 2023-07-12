import React, { createContext, useEffect, useState } from "react";
import { colorPalette } from "../constants";

const Context = createContext({
  theme: undefined,
  toggleTheme: null,
});

const changeColorsTo = (theme) => {
  const properties = [
    "background",
    "paraText",
    "headerText",
    "base",
    "pressed",
    "shade",
  ];
  console.log("set changeColorsTo");
  if (typeof document !== "undefined") {
    properties.forEach((x) => {
      document.documentElement.style.setProperty(
        `--${x}`,
        colorPalette[(theme === undefined ? "dark" : theme).toLowerCase()][x]
      );
    });
    console.log("set property");
  }
};

const ContextProvider = (props) => {
  let [currentTheme, setTheme] = useState("DARK");
  useEffect(() => {
    let storageTheme = localStorage.getItem("themeSwitch");
    let currentTheme = storageTheme ? storageTheme : "DARK";
    setTheme(currentTheme);
  }, []);

  changeColorsTo(currentTheme);
  console.log("ssdsdds", currentTheme);
  let themeSwitchHandler = () => {
    console.log("sdsds");
    const newTheme = currentTheme === "DARK" ? "LIGHT" : "DARK";
    setTheme(newTheme);
    window && localStorage.setItem("themeSwitch", newTheme);
    changeColorsTo(newTheme);
  };

  return (
    <Context.Provider
      value={{
        theme: currentTheme,
        toggleTheme: themeSwitchHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
