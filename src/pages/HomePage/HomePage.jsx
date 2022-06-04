import React from "react";
import { Typography } from "@mui/material";

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import { ThemeContext } from "../../theme/themeContext";

const HomePage = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <div style={theme.container}>
      <Typography style={theme.title}>
        Пажилой сайт с аниме девочками
      </Typography>
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
