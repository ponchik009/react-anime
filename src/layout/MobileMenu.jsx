import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MenuItem, Menu, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { LanguageContext } from "../language/languageContext";

const MobileMenu = () => {
  const language = useContext(LanguageContext);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateTo = (path) => {
    handleClose();
    navigate(path);
  };
  return (
    <>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem onClick={() => navigateTo("/")}>
          {language.menu.home}
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/anime")}>
          {language.menu.anime}
        </MenuItem>
        <MenuItem onClick={() => navigateTo("/waifu")}>
          {language.menu.waifu}
        </MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenu;
