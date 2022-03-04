import { Typography } from "@mui/material";
import React from "react";
import { Layout } from "src/components/Layout/Layout";

const About = () => {
  return (
    <>
      <Layout pageTitle="About">
        <Typography>Submitted By: Omar Mohammad</Typography>
        <Typography>
          <a
            href="https://www.linkedin.com/in/omar1108/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </Typography>
      </Layout>
    </>
  );
};

export default About;
