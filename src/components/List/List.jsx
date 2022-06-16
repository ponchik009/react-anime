import React from "react";
import { CircularProgress, Grid } from "@mui/material";

import { ThemeContext } from "../../theme/themeContext";
import Item from "./Item/Item";

const List = ({ fetchFunction, isLoading, type }) => {
  const theme = React.useContext(ThemeContext);

  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState("");

  const onDownDivScroll = React.useCallback(function (entries) {
    if (entries[0].isIntersecting) {
      fetchFunction()
        .then((generatorObject) => {
          if (!generatorObject.value) return;
          setData((data) => [...data, ...generatorObject.value.data]);
        })
        .catch((err) => {
          setError("Не удалось получить данные");
        });
    }
  });

  const observer = React.useRef(new IntersectionObserver(onDownDivScroll));

  React.useEffect(() => {
    observer.current.observe(document.querySelector("#down"));
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <>
          <Grid
            container
            spacing={{
              xs: 1,
              sm: 2,
              md: 4,
            }}
            justifyContent="center"
            alignItems="center"
          >
            {data.map((item, index) => {
              return <Item type={type} theme={theme} item={item} key={index} />;
            })}
          </Grid>
          <div>{error}</div>
        </>
      ) : (
        <p>{error}</p>
      )}
      {isLoading && <CircularProgress />}
      <div id="down" style={{ height: "20px" }}></div>
    </>
  );
};

export default List;
