import React from "react";

import AppRouter from "./components/AppRouter/AppRouter";
import Layout from "./layout/Layout";
import { themes, ThemeContext } from "./theme/themeContext";

function App() {
  const [theme, setTheme] = React.useState(themes.light);

  const toggleTheme = () =>
    setTheme(theme === themes.light ? themes.dark : themes.light);
  return (
    <ThemeContext.Provider value={theme}>
      <Layout toggleTheme={toggleTheme}>
        <AppRouter />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
