import { CircularProgress } from "@mui/material";
import React from "react";

import { Api } from "../../api/api";
import AnimeList from "../../components/AnimeList/AnimeList";
import { useFetch } from "../../hooks/hooks";

const AnimePage = () => {
  const [data, setData] = React.useState();

  const animeGenerator = React.useRef(Api.getAnime());

  const [fetchAnime, isLoading] = useFetch(
    animeGenerator.current.next.bind(animeGenerator.current)
  );

  React.useEffect(() => {
    fetchAnime().then((generatorObject) => {
      setData(generatorObject.value.data);
    });
  }, []);

  return (
    <div>{isLoading ? <CircularProgress /> : <AnimeList data={data} />}</div>
  );
};

export default AnimePage;
