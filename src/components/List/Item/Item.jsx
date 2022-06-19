import React from "react";

import AnimeItem from "./AnimeItem";
import WaifuItem from "./WaifuItem";

const Item = ({ type, item, theme }) => {
  switch (type) {
    case "anime":
      return <AnimeItem anime={item} theme={theme} />;
    case "waifu":
      return <WaifuItem url={item} theme={theme} />;
  }
};

export default Item;
