import React, { useContext } from "react";

import { ThemeContext } from "../theme/themeContext";
import { Box, Button } from "@mui/material";

const Layout = ({ children, toggleTheme, handleUpdate }) => {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme}>
      <Box style={theme.buttonGroup}>
        <Button onClick={toggleTheme} style={theme.button}>
          Поменять тему
        </Button>
        <Button onClick={handleUpdate} style={theme.button}>
          Обновить список
        </Button>
      </Box>
      {children}
    </div>
  );
};

export default Layout;
