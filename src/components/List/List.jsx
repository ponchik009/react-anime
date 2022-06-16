import React from "react";
import { ThemeContext } from "../../theme/themeContext";
import { CircularProgress, Grid } from "@mui/material";

const List = ({ fetchFunction, isLoading }) => {
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
            {data.map((anime) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={anime.mal_id}
                  style={theme.card}
                >
                  <p>{anime.title}</p>
                  <img src={anime.images.jpg.image_url} alt="Аватарка" />
                </Grid>
              );
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
