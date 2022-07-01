import React from "react";

import AppRouter from "./components/AppRouter/AppRouter";
import Layout from "./layout/Layout";
import { languages, LanguageContext } from "./language/languageContext";
import { themes, ThemeContext } from "./theme/themeContext";

function App() {
  const [theme, setTheme] = React.useState(themes.light);
  const [language, setLanguage] = React.useState(languages.en);

  const toggleTheme = () =>
    setTheme(theme === themes.light ? themes.dark : themes.light);

  const toggleLanguage = (event) => setLanguage(languages[event.target.value]);
  return (
    <LanguageContext.Provider value={language}>
      <ThemeContext.Provider value={theme}>
        <Layout toggleTheme={toggleTheme} toggleLanguage={toggleLanguage}>
          <AppRouter />
        </Layout>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
