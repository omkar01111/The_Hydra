import * as React from "react";
import "../Style/navbar.css";
import Logo from "../Assets/logo/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Stack,
  MenuItem,
  Tooltip,
  Avatar,
  Container,
  Menu,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Button,
} from "@mui/material";

const pages = ["ABOUT", "Services", "Technologies", " How To"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-50%";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#343045",
        top: "0%",
        width: "100%",
        transition: "top 0.4s",
      }}
      className="navbar"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box sx={{ mr: "-20px" }}>
              <img className="logo" src={Logo} alt="logo" />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                color: "#a399ce",
                margin: "-20px 0",

                mr: 2,
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              HYDRA
            </Typography>
          </Stack>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              width="40px"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Stack
            sx={{
              display: { xs: "flex", md: "none" },
              left: { sm: "35%", xs: "25%" },
            }}
            position={"absolute"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box sx={{ mr: "-20px" }}>
              <img className="logo" src={Logo} alt="logo" />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                color: "#a399ce",
                margin: "-20px 0",
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".2rem",
                textDecoration: "none",
              }}
            >
              HYDRA
            </Typography>
          </Stack>

          <Box
            justifyContent={"center"}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              width: "60%",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  margin: "0px 2%",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, margin: "0px 20px" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
