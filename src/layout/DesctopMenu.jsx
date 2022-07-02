import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Tabs, Tab } from "@mui/material";

import { LanguageContext } from "../language/languageContext";
import { routes } from "../const/const";

const DesctopMenu = () => {
  const language = useContext(LanguageContext);

  const location = useLocation();

  const [tab, setTab] = React.useState(routes.indexOf(location.pathname));

  React.useEffect(() => {
    setTab(routes.indexOf(location.pathname));
  });

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Tabs value={tab} onChange={handleTabChange}>
      <Tab label={language.menu.home} LinkComponent={NavLink} to="/" />
      <Tab label={language.menu.anime} LinkComponent={NavLink} to="/anime" />
      <Tab label={language.menu.waifu} LinkComponent={NavLink} to="/waifu" />
    </Tabs>
  );
};

export default DesctopMenu;
