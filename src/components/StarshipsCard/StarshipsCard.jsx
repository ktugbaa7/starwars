import React from "react";
import getUrlId from "../../utils/getUrlId";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Box, CardContent, CardMedia, Grid } from "@mui/material";
import { AiOutlineStar } from "react-icons/ai";
import { SiStarship } from "react-icons/si";

function StarshipsCard({ ships }) {
  return (
    <Grid item sx={{ maxWidth: "100%" }}>
      <Card
        sx={{
          backgroundColor: "#1D1E1F",
          height: 380,
          borderRadius: 3,
          ":hover": {
            transition: "0.4s",
            boxShadow: "0px 0px 10px -2px rgba(184,184,184,1)",
          },
          boxShadow: 3,
        }}
      >
        <Link to={`starships/${getUrlId(ships.url)}`}>
          <CardMedia
            sx={{ height: 220 }}
            image={require("../../assets/image/" + ships.name + ".jpg")}
            title="starships"
          />
        </Link>
        <CardContent sx={{ height: 120, color: "#f8f8f8" }}>
          <Typography gutterBottom variant="h5"  sx={{lineHeight: "1.5rem", fontSize:18, fontWeight: 800}}>
            {ships.name}
          </Typography>
          <Box
          paddingTop={1}
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: 2
            }}
          >
            <SiStarship style={{ fontSize: 25, color: "#facf5a", marginRight: 10 }} />
            <Typography variant="body2" noWrap>
              {ships.model}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AiOutlineStar style={{ fontSize: 25, color: "#facf5a", paddingRight:10 }} />
            <Typography variant="body2" noWrap>
              {ships.hyperdrive_rating}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default StarshipsCard;
