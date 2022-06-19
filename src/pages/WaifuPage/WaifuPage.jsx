import React from "react";

import { Api } from "../../api/api";
import List from "../../components/List/List";
import { useFetch } from "../../hooks/hooks";

const WaifuPage = () => {
  const waifuGenerator = React.useRef(Api.waifuGenerator());

  const [fetchWaifu, isLoading] = useFetch(
    waifuGenerator.current.next.bind(waifuGenerator.current)
  );

  return (
    <>
      <List fetchFunction={fetchWaifu} isLoading={isLoading} type="waifu" />
    </>
  );
};

export default WaifuPage;
