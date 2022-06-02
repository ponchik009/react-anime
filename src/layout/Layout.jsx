import { ThemeContext } from "@emotion/react";
import React, { useContext } from "react";

const Layout = ({ children, toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme}>
      <button onClick={toggleTheme} style={theme.button}>
        CHANGE THEME
      </button>
      <div>123</div>
    </div>
  );
};

export default Layout;
