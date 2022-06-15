import React from "react";
import { ThemeContext } from "../../theme/themeContext";
import { Grid } from "@mui/material";

const AnimeList = ({ data, error }) => {
  const theme = React.useContext(ThemeContext);

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
                  md={3}
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
    </>
  );
};

export default AnimeList;
