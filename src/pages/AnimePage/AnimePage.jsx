import React from "react";

import { Api } from "../../api/api";
import AnimeList from "../../components/AnimeList/AnimeList";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const AnimePage = () => {
  const [data, setData] = React.useState();

  const animeGenerator = React.useRef(Api.getAnime());

  const fetchAnime = () =>
    animeGenerator.current
      .next()
      .then((generatorObject) => setData(generatorObject.value.data));

  React.useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div>
      <AnimeList data={data} />
      <ScrollToTop />
    </div>
  );
};

export default AnimePage;
