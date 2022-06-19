import React from "react";

import { Api } from "../../api/api";
import List from "../../components/List/List";
import { useFetch } from "../../hooks/hooks";

const AnimePage = () => {
  const animeGenerator = React.useRef(Api.animePageGenerator());

  const [fetchAnime, isLoading] = useFetch(
    animeGenerator.current.next.bind(animeGenerator.current)
  );

  return (
    <>
      <List fetchFunction={fetchAnime} isLoading={isLoading} type="anime" />
    </>
  );
};

export default AnimePage;
