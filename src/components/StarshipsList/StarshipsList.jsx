import React from "react";
import { useStarWars } from "../../context/StarWarsContext";
import SearchBar from "../SearchBar/SearchBar";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import StarshipsCard from "../StarshipsCard/StarshipsCard";
import Loading from "../Loading/Loading";

function StarshipsList() {
  const { starships, loading, loadMore, totalPage, loadingMore } = useStarWars();

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="starships-list">
          <SearchBar />
          <Container
            maxWidth="lg"
            sx={{
              paddingY: 5,     
            }}
          >
            <Grid container>
              <Typography
                sx={{
                  fontSize: 30,
                  marginBottom: 1,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Starships
              </Typography>
              <div className="starships-list__saber"></div>
              {starships.length > 0 ?
                (starships.map((ships, id) => (
                  <Grid paddingX={2} item sx={{ mt: 4 }} xs={12} sm={6} md={4} lg={3}>
                    <StarshipsCard key={id} ships={ships} />
                  </Grid>
                ))):(<div style={{color: "white", height: 150, paddingTop: 30 }}>Starships Not Found!</div>)}
            </Grid>
              
            {totalPage !== null && starships.length > 0 ? (
              <Stack spacing={2} sx={{ alignItems: "center", paddingY: 2 }}>
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    ":hover": {
                      color: "#facf5a",
                      borderColor: "#facf5a",
                    },
                  }}
                  onClick={loadMore}
                >
                  {loadingMore  ? "Loading..." : "Show More"}
                </Button>
              </Stack>
            ): (<div></div>)}
          </Container>
        </div>
      )}
    </div>
  );
}

export default StarshipsList;
