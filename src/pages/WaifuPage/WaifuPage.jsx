import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

import { Api } from "../../api/api";
import List from "../../components/List/List";
import { useFetch } from "../../hooks/hooks";

const WaifuPage = () => {
  const [type, setType] = React.useState("sfw");
  const waifuGenerator = React.useRef(Api.waifuPageGenerator(type));
  const [fetchWaifu, isLoading] = useFetch();

  const handleChange = (event, newType) => {
    if (!newType) {
      return;
    }
    console.log(newType);
    setType(newType);
    waifuGenerator.current = Api.waifuPageGenerator(newType);
  };

  const fetch = React.useCallback(
    fetchWaifu.bind(null, waifuGenerator.current.next),
    [type]
  );

  return (
    <>
      <ToggleButtonGroup value={type} exclusive onChange={handleChange}>
        <ToggleButton value="sfw">SFW</ToggleButton>
        <ToggleButton value="nsfw">NSFW</ToggleButton>
      </ToggleButtonGroup>
      <List fetchFunction={fetch} isLoading={isLoading} type="waifu" />
    </>
  );
};

export default WaifuPage;
