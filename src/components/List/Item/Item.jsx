import React from "react";

import AnimeItem from "./AnimeItem";

const Item = ({ type, item, theme }) => {
  switch (type) {
    case "anime":
      return <AnimeItem anime={item} theme={theme} />;
  }
};

export default Item;
