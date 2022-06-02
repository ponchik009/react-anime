import { ThemeContext } from "@emotion/react";
import React from "react";
import Layout from "./layout/Layout";
import { themes } from "./theme/themeContext";

function App() {
  const [theme, steTheme] = React.useState(themes.light);

  const toggleTheme = () =>
    steTheme(theme === themes.light ? themes.dark : themes.light);

  return (
    <ThemeContext.Provider value={theme}>
      <Layout toggleTheme={toggleTheme} />
    </ThemeContext.Provider>
  );
}

export default App;
