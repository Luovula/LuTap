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
import { Outlet, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useScrollPosition } from "../hooks";

function App() {
  const location = useLocation();
  const scrollTop = useScrollPosition();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isReelOpen, setIsReelOpen]= useState<boolean>(false);
  const nav = ["Home", "AboutMe", "Events"];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleReelDlg =()=>{
    setIsReelOpen(!isReelOpen);
  }

  const getPageLocationForRoute = (pathname: string): string => {
    // Remove leading slash and replace any remaining slashes with dashes
    // Also convert to lowercase
    const className = pathname.substring(1).replace(/\//g, "-").toLowerCase();
    return className || "home"; // Default to 'Home' if no path
  };

  // Determine the class name for the current route
  const pageLocation = getPageLocationForRoute(location.pathname);

  return (
    <Box className={`AppFrame ${pageLocation}`}>
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
                      <Link to={idx === 0 ? "/" : nav[idx]}>{page}</Link>
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
                  <Link to={idx === 0 ? "/" : nav[idx]}>{page}</Link>
                </Button>
              ))}
            </Box>

            {true ? (
              <Box sx={{ flexGrow: 0 }}>
                <Button className="TapBtn" onClick={() => {handleReelDlg()}} sx={{ p: 0 }}>
                  {"TapMe"}
                </Button>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }} width={50} height={5}></Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Dialog
        open={isReelOpen}
        onClose={handleReelDlg}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Reel
        </DialogTitle>
        <DialogContent className="DlgContent">
        <iframe width="366" height="651" src="https://www.youtube.com/embed/Iz66PQcRmis" title="LuTap promo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
      <Outlet />
    </Box>
  );
}

export default App;
