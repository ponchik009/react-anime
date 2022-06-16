import React from "react";

import { Grid } from "@mui/material";

const AnimeItem = ({ anime, theme }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={anime.mal_id} style={theme.card}>
      <p>{anime.title}</p>
      <img src={anime.images.jpg.image_url} alt="Аватарка" />
    </Grid>
  );
};

export default AnimeItem;
