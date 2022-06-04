import React from "react";

import { Api } from "./api/api";
import AnimeList from "./components/AnimeList/AnimeList";
import Layout from "./layout/Layout";
import { themes, ThemeContext } from "./theme/themeContext";

function App() {
  const [theme, setTheme] = React.useState(themes.light);
  const [data, setData] = React.useState();

  const animeGenerator = React.useRef(Api.getAnime());

  const toggleTheme = () =>
    setTheme(theme === themes.light ? themes.dark : themes.light);

  const fetchAnime = () =>
    animeGenerator.current
      .next()
      .then((generatorObject) => setData(generatorObject.value.data));

  React.useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <ThemeContext.Provider value={theme}>
      <Layout toggleTheme={toggleTheme} handleUpdate={fetchAnime}>
        <AnimeList data={data} />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
