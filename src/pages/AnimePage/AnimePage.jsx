import React from "react";

import { Api } from "../../api/api";

const AnimePage = () => {
  const [data, setData] = React.useState();

  const animeGenerator = React.useRef(Api.getAnime());

  const fetchAnime = () =>
    animeGenerator.current
      .next()
      .then((generatorObject) => setData(generatorObject.value.data));

  return <div>AnimePage</div>;
};

export default AnimePage;
