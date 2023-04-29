/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
import { RiTeamFill } from "react-icons/ri";
import { SiStarship } from "react-icons/si";
import { MdSpeed, MdPrecisionManufacturing } from "react-icons/md";
import { GiCargoCrate, GiSpaceship, GiGalaxy } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import img from "../../assets/image/bgbg.jpg";

function StarshipsDetails() {
  const [shipsdata, setShipsData] = useState();

  const { id } = useParams();

  const getStarshipsDetails = async () => {
    try {
      const response = await api.get(`/starships/${id}`);
      setShipsData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStarshipsDetails();
  }, [id]);

  const typographyStyle = {
    color: "#eaf6f6",
    opacity: "none",
    width: "100%",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "monospace",
  };
  const iconStyle = {
    fontSize: 25,
    color: "#facf5a",
    marginRight: 10,
  };
  const miniBoxStyle = {
    display: "flex",
    alignItems: "center",
  };
  const containerStyled = {
    backgroundImage: `url(${img})`,
    height: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const boxStyle = {
    display: "flex",
    flexWrap: "wrap",
    "& > :not(style)": {
      m: "auto",
      width: "90%",
      height: 450,
      marginTop: 25,
      marginBottom: 15,
      opacity: 0.7,
      padding: 1,
      backgroundColor: "black",
      borderRadius: 4,
      boxShadow: "0px 0px 10px -2px rgba(184,184,184,1)",
    },
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        position: "relative",
      }}
      style={containerStyled}
    >
      <Box sx={boxStyle}>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexFlow: "column",
          }}
        >
          <Box sx={miniBoxStyle}>
            <GiSpaceship style={iconStyle} />
            <Typography component="div" sx={typographyStyle}>
              Name : {shipsdata?.name}
            </Typography>
          </Box>
          <Box sx={miniBoxStyle}>
            <SiStarship style={iconStyle} />
            <Typography component="div" sx={typographyStyle}>
              Model: {shipsdata?.model}
            </Typography>
          </Box>
          <Box sx={miniBoxStyle}>
            <MdSpeed style={iconStyle} />
            <Typography component="div" sx={typographyStyle}>
              {" "}
              Max Atmosphering Speed: {shipsdata?.max_atmosphering_speed}
            </Typography>
          </Box>
          <Box sx={miniBoxStyle}>
            <MdPrecisionManufacturing style={iconStyle} />
            <Typography component="div" sx={typographyStyle}>
              Manufacturer: {shipsdata?.manufacturer}
            </Typography>
          </Box>
          <Box sx={miniBoxStyle}>
            <RiTeamFill style={iconStyle} />
            <Typography component="div" sx={typographyStyle}>
              Crew: {shipsdata?.crew}
            </Typography>
          </Box>
          <Box sx={miniBoxStyle}>
            <GiCargoCrate style={iconStyle} />
            <Typography component="div" sx={typographyStyle}>
              Cargo Capacity: {shipsdata?.cargo_capacity}
            </Typography>
          </Box>
          <Box sx={miniBoxStyle}>
            <IoIosPeople style={iconStyle} />
            <Typography component="div" sx={typographyStyle}>
              Passengers: {shipsdata?.passengers}
            </Typography>
          </Box>
          <Box sx={miniBoxStyle}>
            <GiGalaxy style={iconStyle} />
            <Typography component="div" sx={typographyStyle}>
              MGLT: {shipsdata?.MGLT}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default StarshipsDetails;
