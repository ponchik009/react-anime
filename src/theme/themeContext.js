import React from "react";

export const themes = {
  dark: {
    background: "black",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "calc(8vh + 2vw)",
    boxSizing: "border-box",
    minHeight: "100vh",

    button: {
      background: "white",
      color: "black",
    },

    container: {
      minWidth: "80vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    title: {
      fontSize: "calc(3vh + 3vw)",
    },

    appbar: {
      backgroundColor: "#0ced10",
    },

    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  light: {
    background: "white",
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "calc(8vh + 2vw)",
    boxSizing: "border-box",
    minHeight: "100vh",

    button: {
      background: "#c953c9",
      color: "white",
    },

    container: {
      minWidth: "80vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    title: {
      fontSize: "calc(3vh + 3vw)",
    },

    appbar: {
      backgroundColor: "#7be391",
    },

    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
};

export const ThemeContext = React.createContext(themes.light);
