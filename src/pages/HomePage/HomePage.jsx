import React from "react";
import { Typography } from "@mui/material";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { ThemeContext } from "../../theme/themeContext";
import { LanguageContext } from "../../language/languageContext";

const HomePage = () => {
  const theme = React.useContext(ThemeContext);
  const language = React.useContext(LanguageContext);

  return (
    <div style={theme.container}>
      <Typography style={theme.title}>{language.mainTitle}</Typography>
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
