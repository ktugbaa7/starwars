import React from "react";
import { useStarWars } from "../../context/StarWarsContext";
import SearchBar from "../SearchBar/SearchBar";
import { Container, Grid } from "@mui/material";
import StarshipsCard from "../StarshipsCard/StarshipsCard";

function StarshipsList() {
  const { starships, loading, loadMore, totalPage, page } = useStarWars();

  return (
    <div className="starships-list">
      <SearchBar />
      {/* {loading ? "Loading..." : ""} */}
      <div className="starships-list__container">
        <Container sx={{ marginTop: 3, backgroundColor: "red"}}>
          <Grid container spacing={3}>
            {starships &&
              starships.map((ships, id) => (
                <Grid item sx={{ mt: 3 }} xs={12} sm={6} md={4} lg={3}>
                  <StarshipsCard key={id} ships={ships} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
      {totalPage !== page && (
        <button onClick={loadMore}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}

export default StarshipsList;
