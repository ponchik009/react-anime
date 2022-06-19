import React from "react";
import { Grid } from "@mui/material";

const WaifuItem = ({ url, theme }) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={url} style={theme.card}>
      <img src={url} alt="Аватарка" width="100%" height="100%" />
    </Grid>
  );
};

export default WaifuItem;
