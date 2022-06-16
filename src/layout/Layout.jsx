import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ThemeContext } from "../theme/themeContext";
import { AppBar, Box, Button, Tabs, Toolbar, Tab } from "@mui/material";
import { routes } from "../const/const";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Layout = ({ children, toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const location = useLocation();

  const [tab, setTab] = React.useState(routes.indexOf(location.pathname));

  React.useEffect(() => {
    setTab(routes.indexOf(location.pathname));
  });

  const handleTabChange = (event, newValue) => {
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
      <Box style={theme}>
        {children} <ScrollToTop />
      </Box>
    </>
  );
};

export default Layout;
