import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../theme/themeContext";
import { AppBar, Box, Button, Tabs, Toolbar, Tab } from "@mui/material";

const Layout = ({ children, toggleTheme }) => {
  const theme = useContext(ThemeContext);

  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    setTab(newValue);
  };

  return (
    <>
      <AppBar position="fixed" style={theme.appbar}>
        <Toolbar style={theme.toolbar}>
          <Button onClick={toggleTheme} style={theme.button}>
            Поменять тему
          </Button>
          <Tabs value={tab} onChange={handleTabChange}>
            <Tab label="Главная" LinkComponent={NavLink} to="/" />
            <Tab label="Аниме" LinkComponent={NavLink} to="/anime" />
            <Tab label="Вайфу" LinkComponent={NavLink} to="/waifu" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div id="up"></div>
      <Box style={theme}>{children}</Box>
      <div id="down"></div>
    </>
  );
};

export default Layout;
