import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stores = [
  {
    location: "GURGAON",
    name: "Sushant Lok",
    address: "GF 133, Sushant Vyapar Kendra, Sushant Lok, Gurgaon",
    timings: "10:00 AM - 09:00 PM",
    pincode: "122001",
  },
  {
    location: "GURGAON",
    name: "Sector-14",
    address:
      "Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank market, Gurugram",
    timings: "10:00 AM - 09:00 PM",
    pincode: "122001",
  },
  {
    location: "GURGAON",
    name: "Cashify Buy, ",
    address:
      "Shop No.13, Old Delhi road, Opp. Plaza Solitaire Hotel Bank market, Gurugram",
    timings: "10:00 AM - 09:00 PM",
    pincode: "122001",
  },
  {
    location: "GURGAON",
    name: "Cashify Buy, Sell and Repair Mobile Store MG Road Gurgaon",
    address: "MG Road Metro, Exit Gate no 2, M.G. Road, Gurgaon",
    timings: "09:00 AM - 09:00 PM",
    pincode: "122001",
  },
];

const StoreCard = ({ store }) => (
  <Card
    sx={{
      boxShadow: 6,
      height: "100%",
      m: 2,
      width: 350,
      display: "flex",
      marginRight: "20%",
    }}
  >
    <CardContent>
      <Typography
        variant="subtitle2"
        color="textSecondary"
        sx={{
          mb: 1,
          background: "black",
          width: "fit-content",
          padding: 1,
          color: "white",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        {store.location}
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        {store.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        {store.address}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
        Pincode: {store.pincode}
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Timings: {store.timings}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium" sx={{ textTransform: "none", color: "black" }}>
        View Details
      </Button>
    </CardActions>
  </Card>
);

const OutlinedCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ minWidth: 275, border: "none" }}>
      <Card variant="outlined">
        <Box
          sx={{
            textAlign: "start",
            maxWidth: 1450,
            mx: "auto",
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Our Exclusive Stores
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ cursor: "pointer", color: "teal" }}
          >
            View all stores
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "left", mb: 12, ml: 32 }}>
          <Box sx={{ display: "flex", alignItems: "left", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ color: "teal" }} />
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                200+ Experience Centres
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StarIcon sx={{ color: "teal" }} />
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                4.5+ Star Ratings
              </Typography>
            </Box>
          </Box>
        </Box>
        <Card
          sx={{
            maxWidth: 1400,
            margin: "auto",
            background: "lightGrey",
            height: "300px",
            border: "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              mb: 4,
              alignItems: "flex-start",
              ml: 2,
              padding: "30px",
            }}
          >
            <TextField
              label="Enter Pincode"
              variant="outlined"
              sx={{
                width: "300px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
              InputProps={{
                endAdornment: (
                  <ArrowForwardIosIcon sx={{ ml: 1, cursor: "pointer" }} />
                ),
              }}
            />
          </Box>
          <Container
            maxWidth="xl"
            sx={{
              py: 4,
              position: "absolute",
              maxWidth: 1400,
              marginRight: "20%",
            }}
          >
            <Slider {...settings}>
              {stores.map((store, index) => (
                <div key={index}>
                  <StoreCard store={store} />
                </div>
              ))}
            </Slider>
          </Container>
        </Card>
      </Card>
    </Box>
  );
};

export default OutlinedCard;
