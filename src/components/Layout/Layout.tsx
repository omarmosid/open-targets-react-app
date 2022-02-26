import { Box, Container, AppBar } from "@mui/material";
import React from "react";
import { Navbar } from "../Nav/Navbar";

type LayoutProps = {
  pageTitle?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, pageTitle = "" }) => {
  return (
    <>
      <Navbar pageTitle={pageTitle} />
      <Box>
        <Container>{children}</Container>
      </Box>
    </>
  );
};

export { Layout };
