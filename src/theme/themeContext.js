import React from "react";

export const themes = {
  dark: {
    background: "black",
    color: "white",
    button: {
      background: "white",
      border: "1px solid red",
      color: "black",
    },
  },
  light: {
    background: "white",
    color: "black",
    button: {
      background: "black",
      border: "1px solid red",
      color: "white",
    },
  },
};

export const ThemeContext = React.createContext(themes.light);
