import React, { useContext } from "react";

import { ThemeContext } from "../theme/themeContext";
import { AppBar, Box, Button, Toolbar } from "@mui/material";

const Layout = ({ children, toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Button onClick={toggleTheme} style={theme.button}>
            Поменять тему
          </Button>
        </Toolbar>
      </AppBar>
      <div id="up"></div>
      <Box style={theme}>{children}</Box>
      <div id="down"></div>
    </>
  );
};

export default Layout;
