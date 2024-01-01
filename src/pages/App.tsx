import { useState, useEffect } from "react";
import "../styles/main.scss";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/Logo.png";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const nav = ["AboutMe", "Events"];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box className="AppFrame">
      <AppBar position="absolute" className="AppBar">
        <Container className="Container">
          <Toolbar disableGutters>
            <Box
              className="LogoBox Centered"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Link to="/">
                <img src={Logo} alt="Logo" className="LogoImg" />
              </Link>
            </Box>
            <Typography
              variant="h1"
              noWrap
              className="Title"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/">Lutap</Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                {nav.map((page, idx) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Box className="AppFrame NavItem">
                      <Link to={nav[idx]}>{page}</Link>
                    </Box>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              className="LogoBox Centered"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Link to="/">
                <img src={Logo} alt="Logo" className="LogoImg" />
              </Link>
            </Box>

            <Typography
              variant="h1"
              noWrap
              className="Title"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to="/">Lutap</Link>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {nav.map((page, idx) => (
                <Button
                  className="NavItem OpenMenu"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, display: "block" }}
                >
                  <Link to={nav[idx]}>{page}</Link>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button className="TapBtn" onClick={() => {}} sx={{ p: 0 }}>
                {"TapMe"}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default App;
