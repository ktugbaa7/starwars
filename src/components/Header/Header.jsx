import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { GiLightSabers } from "react-icons/gi";
import logo from "../../assets/image/logosw.png"


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const logoSW = logo;

  const logoStyle = {
    width: 130,
    height: 60,
    xs: "none", 
    md: "flex"
  }
  const menuItems = {
    width: 200,
    height: 40,
    color: "black", 
    ":hover": {
      color: "red", 
      transition: "0.4s", 
      backgroundColor: "black"
    },
    textAlign: "center"
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl" 
      sx={{ 
        backgroundColor: "black", 
        paddingBottom: 1, 
        paddingTop: 1, 
        borderBottom: "1px solid", 
        borderColor: "#413F42",
      }}>
        <Toolbar disableGutters>
        
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ ":hover":{
                color: "red",
                transition: "0.4s"
              },
              
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },    

              }}
            >
              <MenuList onClick={handleCloseNavMenu}>
              <MenuItem sx={menuItems}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem  sx={menuItems}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem  sx={menuItems}>
                <Typography textAlign="center">Swapi</Typography>
              </MenuItem>  
              </MenuList>
                              
            </Menu>
          </Box>
          <GiLightSabers style={{width: 40, height:40, marginRight: 10 }} sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}/>

          <img src={logoSW} alt="starwars img" style={logoStyle} />

          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "flex-end" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 4, color: "white", display: "block"}}
            >
              HomeEE
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              SWAPI
            </Button>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
