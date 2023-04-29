import React from "react";
import { useStarWars } from "../../context/StarWarsContext";
import { Box, Button, FormControl, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const { handleInputChange, onSubmitHandler, search } = useStarWars();
  const boxStyle = {
    backgroundColor: "black",
    fontWeight: "light",
    borderBottom: "1px solid",
    borderColor: "#413F42",
    paddingBottom: 3,
    marginTop: 10,
    boxShadow: "0px 0px 10px -2px rgba(184,184,184,1)",
  };
  const formControlStyle = {
    paddingY: 3,
    marginX: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  const inputBaseStyle = {
    color: "white",
    minWidth: 200,
    width: 600,
    backgroundColor: "#040303",
    paddingX: 2,
    paddingY: 1,
    border: "1px solid",
    borderColor: "#413F42",
    borderRadius: "10px 0  0 10px",
    fontFamily: "monospace",
  };
  const buttonStyle = {
    border: "1px solid #413F42",
    borderRadius: "0 10px 10px 0",
    backgroundColor: "#090903",
    width: 80,
    height: 50,
  };
  const iconStyle = {
    color: "grey",
    ":hover": {
      color: "#facf5a",
    },
  };

  return (
    <Box component="form" onSubmit={onSubmitHandler} sx={boxStyle}>
      <div className="writer">
        <div className="typewriter">
          <p className="typewriter__text">"May the force be with you."</p>
        </div>
      </div>
      <FormControl sx={formControlStyle}>
        <InputBase
          required
          type="search"
          placeholder="Search Starship..."
          value={search}
          onChange={handleInputChange}
          sx={inputBaseStyle}
        />
        <Button type="submit" sx={buttonStyle}>
          <SearchIcon sx={iconStyle} />
        </Button>
      </FormControl>
    </Box>
  );
}

export default SearchBar;
