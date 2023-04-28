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
import logo from "../../assets/image/logoS.png";
import { Link } from "react-router-dom";

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
    width: 140,
    height: 80,
    xs: "none",
    md: "flex",
  };
  const menuItems = {
    width: 200,
    height: 40,
    color: "black",
    ":hover": {
      color: "#facf5a",
      transition: "0.4s",
    },
    textAlign: "center",
  };
  const navButton = {
    my: 4,
    color: "#fff",
    display: "block",
    ":hover": {
      color: "#facf5a",
      textShadow:
        "#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px, 2px 2px 2px rgba(206,202,119,0)",
    },
  };
  return (
    <AppBar>
      <Container
        maxWidth
        sx={{
          position: "fixed",
          top: 0,
          zIndex: 1,
          backgroundColor: "black",
          borderBottom: "1px solid",
          borderColor: "#413F42",
        }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                ":hover": {
                  color: "#facf5a",
                  transition: "0.4s",
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
                <Link to="/" style={{ textDecoration: "none" }}>
                  <MenuItem sx={menuItems}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Link>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <MenuItem sx={menuItems}>
                    <Typography textAlign="center">About</Typography>
                  </MenuItem>
                </Link>
                <Link
                  to="https://swapi.dev/"
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem sx={menuItems}>
                    <Typography textAlign="center">Swapi</Typography>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
            }}
          >
            <GiLightSabers
              style={{ width: 40, height: 40 }}
              sx={{ display: { xs: "flex", md: "none" } }}
            />
          </Box>
          <Link to="/">
            <Box sx={{ flexGrow: 0, marginLeft: 15 }}>
              <img src={logoSW} alt="starwars img" style={logoStyle} />
            </Box>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button onClick={handleCloseNavMenu} sx={navButton}>
                Home
              </Button>
            </Link>

            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button onClick={handleCloseNavMenu} sx={navButton}>
                About
              </Button>
            </Link>
            <Link to="https://swapi.dev/" style={{ textDecoration: "none" }}>
              <Button onClick={handleCloseNavMenu} sx={navButton}>
                SWAPI
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
