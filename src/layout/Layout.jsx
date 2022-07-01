import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ThemeContext } from "../theme/themeContext";
import { LanguageContext } from "../language/languageContext";
import {
  AppBar,
  Box,
  Button,
  Tabs,
  Toolbar,
  Tab,
  Select,
  MenuItem,
} from "@mui/material";
import { routes } from "../const/const";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Layout = ({ children, toggleTheme, toggleLanguage }) => {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);
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
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language.tag}
            label="Language"
            onChange={toggleLanguage}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ru">Russian</MenuItem>
          </Select>
          <Tabs value={tab} onChange={handleTabChange}>
            <Tab label={language.menu.home} LinkComponent={NavLink} to="/" />
            <Tab
              label={language.menu.anime}
              LinkComponent={NavLink}
              to="/anime"
            />
            <Tab
              label={language.menu.waifu}
              LinkComponent={NavLink}
              to="/waifu"
            />
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
