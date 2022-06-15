import { CircularProgress } from "@mui/material";
import React from "react";

import { Api } from "../../api/api";
import AnimeList from "../../components/AnimeList/AnimeList";
import { useFetch } from "../../hooks/hooks";

const AnimePage = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState("");

  const onDownDivScroll = React.useCallback(function (entries) {
    if (entries[0].isIntersecting) {
      fetchAnime()
        .then((generatorObject) => {
          if (!generatorObject.value) return;
          setData((data) => [...data, ...generatorObject.value.data]);
        })
        .catch((err) => {
          setError("Не удалось получить данные");
        });
    }
  });

  const animeGenerator = React.useRef(Api.getAnime());
  const observer = React.useRef(new IntersectionObserver(onDownDivScroll));

  const [fetchAnime, isLoading] = useFetch(
    animeGenerator.current.next.bind(animeGenerator.current)
  );

  React.useEffect(() => {
    observer.current.observe(document.querySelector("#down"));
  }, []);

  return (
    <>
      <AnimeList data={data} error={error} />
      {isLoading && <CircularProgress />}
    </>
  );
};

export default AnimePage;
