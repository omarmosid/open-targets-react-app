import { Typography } from "@mui/material";
import React from "react";

type PageHeadingProps = {};

const PageHeading: React.FC<PageHeadingProps> = ({ children }) => {
  return (
    <>
      <Typography variant="h1" fontSize="2.5em" fontWeight="bold">
        {children}
      </Typography>
    </>
  );
};

export { PageHeading };
