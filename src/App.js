import { ThemeContext } from "@emotion/react";
import React from "react";
import { Api } from "./api/api";
import Layout from "./layout/Layout";
import { themes } from "./theme/themeContext";

function App() {
  const [theme, steTheme] = React.useState(themes.light);

  const quotesGenerator = React.useRef(Api.getQuotes());

  // React.useEffect(() => {
  //   quotesGenerator.current.next().then((quotes) => console.log(quotes));
  // }, [theme]);

  const toggleTheme = () =>
    steTheme(theme === themes.light ? themes.dark : themes.light);

  return (
    <ThemeContext.Provider value={theme}>
      <Layout toggleTheme={toggleTheme} />
    </ThemeContext.Provider>
  );
}

export default App;
