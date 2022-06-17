import React from "react";

import { Api } from "../../api/api";
import List from "../../components/List/List";
import { useFetch } from "../../hooks/hooks";

const WaifuPage = () => {
  const waifuGenerator = React.useRef(Api.getWaifu());

  const [fetchWaifu, isLoading] = useFetch(
    waifuGenerator.current.next.bind(waifuGenerator.current)
  );

  React.useEffect(() => {
    fetchWaifu()
      .then((generatorObject) => {
        if (!generatorObject) return;
        console.log(generatorObject.value.files);
      })
      .catch((err) => {
        console.log("Не удалось получить данные");
      });
  }, []);

  return <div>WaifuPage</div>;
};

export default WaifuPage;
