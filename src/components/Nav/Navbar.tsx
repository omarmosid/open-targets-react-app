import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";

type NavbarProps = {
  pageTitle?: string;
};

const Navbar: React.FC<NavbarProps> = ({ pageTitle = "" }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {pageTitle}
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "2em",
              }}
            >
              <NextLink href="/">Home</NextLink>
              <NextLink href="/about">About Me</NextLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export { Navbar };
