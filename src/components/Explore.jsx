import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myLocalImage23 from "../assets/iphone7.jpg";
import myLocalImage24 from "../assets/iphoneX.jpg";
import myLocalImage25 from "../assets/Iphone11.jpg";
import myLocalImage26 from "../assets/iphone12.jpg";
import myLocalImage27 from "../assets/iphone13.jpg";
import myLocalImage28 from "../assets/Iphonexr.jpg";

const products = [
  {
    id: 1,
    title: "Apple iPhone 7 - Refurbished",
    rating: 4.5,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage23,
  },
  {
    id: 2,
    title: "Apple iPhone X - Refurbished",
    rating: 4.4,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage24,
  },
  {
    id: 3,
    title: "Apple iPhone 11 - Refurbished",
    rating: 4.7,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage25,
  },
  {
    id: 4,
    title: "Apple iPhone 12 - Refurbished",
    rating: 4.9,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage26,
  },
  {
    id: 5,
    title: "Apple iPhone 13 - Refurbished",
    rating: 4.5,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage27,
  },
  {
    id: 6,
    title: "Apple iPhone XR - Refurbished",
    rating: 4.9,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage28,
  },
];

const Explore = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ maxWidth: 1450, margin: "auto", border: "none" }}>
      <Typography variant="h3" align="left" gutterBottom>
        Explore Refurbished Mobiles
      </Typography>

      <Slider {...settings}>
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              maxWidth: 345,
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.title}
              </Typography>
              <Box display="flex" alignItems="center">
                <Rating
                  name="read-only"
                  value={product.rating}
                  readOnly
                  precision={0.5}
                />
              </Box>
              <Typography variant="h6" color="textPrimary">
                ₹{product.monthlyPrice}/month
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Free Delivery • COD Available
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Explore;
