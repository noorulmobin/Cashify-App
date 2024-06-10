import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import HeaderLogo from "../assets/headerlogo.png";
import Menu from "@mui/material/Menu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  width: "60%",
  marginLeft: "auto",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "dark grey",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "none",
}));

const PrimarySearchAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ borderBottom: "1px solid rgb(211, 211, 211)" }}>
        <Navbar
          position="static"
          sx={{
            maxWidth: 1450,
            margin: "auto",
          }}
        >
          <Toolbar>
            <img src={HeaderLogo} alt="" id="Logo" />

            <Search id="search">
              <SearchIconWrapper sx={{ color: "grey" }}>
                <SearchIcon id="searchIcon" />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for Mobiles"
                inputProps={{ "aria-label": "search" }}
                id="searchInput"
              />
            </Search>
            <Button
              variant="contained"
              sx={{ marginLeft: "auto", backgroundColor: "rgb(66, 200, 183)" }}
              id="loginButton"
            >
              Login
            </Button>
          </Toolbar>
        </Navbar>
      </Box>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          backgroundColor: "white",
          borderBottom: "1px solid rgb(211, 211, 211)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1450,
            margin: "auto",
            gap: "111px",
          }}
        >
          <Typography sx={{ color: "black" }}>All</Typography>
          <Typography sx={{ marginLeft: "auto", color: "black" }}>
            SellPhone
          </Typography>
          <Typography sx={{ marginLeft: "auto", color: "black" }}>
            SellGadgets
          </Typography>
          <Typography sx={{ marginLeft: "auto", color: "black" }}>
            BuyPhone
          </Typography>
          <Typography sx={{ marginLeft: "auto", color: "black" }}>
            FindNewGadget
          </Typography>
          <Typography sx={{ marginLeft: "auto", color: "black" }}>
            BuyLaptop
          </Typography>
          <Typography sx={{ marginLeft: "auto", color: "black" }}>
            CashifyStore
          </Typography>
          <Typography sx={{ marginLeft: "auto", color: "black" }}>
            More
          </Typography>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};
export default PrimarySearchAppBar;
