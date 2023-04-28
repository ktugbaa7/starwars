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
    fontFamily:"monospace",
  };
  const iconStyle = {
    fontSize: 25,
    color: "#facf5a",
    marginRight: 10,
  };
  const boxStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div className="body">
      <Container
        sx={{
          height: "100vh",
          position: "absolute",
          zIndex: 77,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: "auto",
              width: "70%",
              height: 450,
              marginTop: 25,
              marginBottom: 5,
              opacity: 0.7,
              padding: 1,
              backgroundColor: "black",
              borderRadius: 4,
              boxShadow: "0px 0px 10px -2px rgba(184,184,184,1)",
            },
          }}
        >
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexFlow: "column",
            }}
          >
            <Box sx={boxStyle}>
              <GiSpaceship style={iconStyle} />
              <Typography component="div" sx={typographyStyle}>
                Name : {shipsdata?.name}
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <SiStarship style={iconStyle} />
              <Typography component="div" sx={typographyStyle}>
                Model: {shipsdata?.model}
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <MdSpeed style={iconStyle} />
              <Typography component="div" sx={typographyStyle}>
                {" "}
                Max Atmosphering Speed: {shipsdata?.max_atmosphering_speed}
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <MdPrecisionManufacturing style={iconStyle} />
              <Typography component="div" sx={typographyStyle}>
                Manufacturer: {shipsdata?.manufacturer}
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <RiTeamFill style={iconStyle} />
              <Typography component="div" sx={typographyStyle}>
                Crew: {shipsdata?.crew}
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <GiCargoCrate style={iconStyle} />
              <Typography component="div" sx={typographyStyle}>
                Cargo Capacity: {shipsdata?.cargo_capacity}
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <IoIosPeople style={iconStyle} />
              <Typography component="div" sx={typographyStyle}>
                Passengers: {shipsdata?.passengers}
              </Typography>
            </Box>
            <Box sx={boxStyle}>
              <GiGalaxy style={iconStyle} />
              <Typography component="div" sx={typographyStyle}>
                MGLT: {shipsdata?.MGLT}
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
    // <img src={require("../../assets/image/" + shipsdata?.name + ".jpg")} alt="shipsdata img" />
  );
}

export default StarshipsDetails;
