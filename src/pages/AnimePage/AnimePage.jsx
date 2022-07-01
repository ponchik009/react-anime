import React from "react";

import { Api } from "../../api/api";
import List from "../../components/List/List";
import { useFetch } from "../../hooks/hooks";

const AnimePage = () => {
  const animeGenerator = React.useRef(Api.animePageGenerator());

  const [fetchAnime, isLoading] = useFetch();

  const fetch = React.useCallback(
    fetchAnime.bind(null, animeGenerator.current.next),
    []
  );

  return (
    <>
      <List fetchFunction={fetch} isLoading={isLoading} type="anime" />
    </>
  );
};

export default AnimePage;
