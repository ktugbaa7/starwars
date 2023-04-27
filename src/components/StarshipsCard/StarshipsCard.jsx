import React from "react";
import getUrlId from "../../utils/getUrlId";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { CardContent, CardMedia, Grid } from "@mui/material";

function StarshipsCard({ ships }) {
  return (
    <Grid item sx={{ maxWidth: "100%" }}>
      <Card
        sx={{
          backgroundColor: "#1D1E1F",
          height: 380,
          ":hover": {
            transition: "0.4s",
            boxShadow: "0px 0px 10px -2px rgba(184,184,184,1)"
          } ,
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
          <Typography
            gutterBottom
            variant="h5"
            noWrap
            sx={{ textOverflow: "ellipsis" }}
          >
            {ships.name}
          </Typography>
          <Typography
            variant="body2"
            noWrap
            sx={{ textOverflow: "ellipsis", paddingBottom: 2 }}
          >
            Model : {ships.model}
          </Typography>
          <Typography variant="body2" noWrap sx={{ textOverflow: "ellipsis" }}>
            Hyperdrive Rating : {ships.hyperdrive_rating}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default StarshipsCard;
