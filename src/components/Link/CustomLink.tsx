import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link } from "@mui/material";

type CustomLinkProps = {} & NextLinkProps;

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <>
      {/* <Link component={NextLink} href={href}>
        {children}
      </Link> */}
    </>
  );
};

export { CustomLink };
