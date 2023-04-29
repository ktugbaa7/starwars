import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import img from "../../assets/image/bgimg.jpg";

function About() {
  const typographyStyle = {
    color: "white",
    opacity: "none",
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "monospace",
  };
  const boxStyle = {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: "auto",
      width: "80%",
      height: 400,
      marginTop: 25,
      marginBottom: 15,
      opacity: 0.7,
      padding: 1,
      backgroundColor: "black",
      borderRadius: 4,
      boxShadow: "0px 0px 10px -2px rgba(184,184,184,1)",
    },
  };
  const paperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
  };
  const containerStyled = {
    backgroundImage: `url(${img})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        position: "relative",
        height: "100vh",
      }}
      style={containerStyled}
    >
      <Box sx={boxStyle}>
        <Paper sx={paperStyle}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography component="div" sx={typographyStyle}>
              Technologies
            </Typography>
            <Typography component="div" sx={typographyStyle}>
              Javascript - React - Axios - Material Ui - SCSS - React Icons -
              SWAPI
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default About;
