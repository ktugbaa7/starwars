import React from "react";
import { Box, Container, Link, Paper, Typography } from "@mui/material";
import {
  SiGithub,
  SiFacebook,
  SiTwitter,
  SiYoutube,
  SiLinkedin,
  SiHackerrank,
  SiInstagram,
} from "react-icons/si";

function Footer() {
  const iconStyle = {
    marginInlineEnd: "1rem",
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "black",
        borderTop: "1px solid #413F42",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            my: 3,
            color: "#eaf6f6",
            fontSize: 30,
          }}
        >
          <Link color="#eaf6f6" href="https://github.com/ktugbaa7"><SiGithub style={iconStyle} /></Link>
          
          <Link color="#eaf6f6" href="https://www.linkedin.com/in/tugbakoc7/"><SiLinkedin style={iconStyle} /></Link>
          <SiFacebook style={iconStyle} />
          <SiTwitter style={iconStyle} />
          <SiYoutube style={iconStyle} />
          <SiHackerrank style={iconStyle} />
          <SiInstagram />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            my: 2,
          }}
        >
          <Typography variant="caption" color="#eaf6f6" fontSize={14}>
            Info {bull} Support {bull} Marketing
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 2,
          }}
        >
          <Typography variant="caption" color="gray"  fontSize={11}>
            © 2023 Star Wars
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;
