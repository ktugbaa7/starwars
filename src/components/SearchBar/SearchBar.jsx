import React from "react";
import { useStarWars } from "../../context/StarWarsContext";
import { Box, Button, FormControl, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const { handleInputChange, onSubmitHandler, search } = useStarWars();

  return (
    <Box component="form" onSubmit={onSubmitHandler} sx={{backgroundColor: "black", fontWeight: 'light' }}> 
      <FormControl  
      sx={{
        paddingY:3,
        marginX: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}>
          <InputBase
            required
            type="search"
            placeholder="Search for a starship..."
            value={search}
            onChange={handleInputChange}
            
            sx={{
              color: "white",
              minWidth: 200,
              width: 600, 
              backgroundColor: "#040303", 
              paddingX:2, paddingY:1, 
              border: "1px solid" ,
              borderColor: "#413F42",
              borderRadius: "10px 0  0 10px",
              ":hover" : {
                border: "1px solid",
                borderColor: "red"
              },
              
            }}
          />
          <Button onClick={onSubmitHandler} 
          sx={{
            border: "1px solid #413F42", 
            borderRadius: "0 10px 10px 0" ,
            backgroundColor: "#090903", 
            width:80, 
            height: 50,
          }} >
             <SearchIcon sx={{ color: "white"}}/>
          </Button>
      </FormControl>
      </Box>
  );
}

export default SearchBar;
