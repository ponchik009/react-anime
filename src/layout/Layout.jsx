import React, { useContext } from "react";

import { AppBar, Box, Button, Toolbar, Select, MenuItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { ThemeContext } from "../theme/themeContext";
import { LanguageContext } from "../language/languageContext";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import DesctopMenu from "./DesctopMenu";
import MobileMenu from "./MobileMenu";

const Layout = ({ children, toggleTheme, toggleLanguage }) => {
  const theme = useContext(ThemeContext);
  const language = useContext(LanguageContext);

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <>
      <AppBar position="fixed" style={theme.appbar}>
        <Toolbar style={theme.toolbar}>
          <Button onClick={toggleTheme} style={theme.button}>
            {language.changeTheme}
          </Button>
          <Select value={language.tag} onChange={toggleLanguage}>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="ru">Русский</MenuItem>
          </Select>
          {matches ? <DesctopMenu /> : <MobileMenu />}
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
