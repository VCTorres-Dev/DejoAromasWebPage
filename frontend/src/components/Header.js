// frontend/src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Dejo Aromas</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
