import React from "react";

export const themes = {
  dark: {
    background: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "calc(2vh + 2vw)",

    button: {
      background: "white",
      color: "black",
    },

    buttonGroup: {
      minWidth: "80vw",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },

    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  light: {
    background: "white",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "calc(2vh + 2vw)",

    button: {
      background: "#c953c9",
      color: "white",
    },

    buttonGroup: {
      minWidth: "80vw",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },

    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
};

export const ThemeContext = React.createContext(themes.light);
