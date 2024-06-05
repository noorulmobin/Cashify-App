import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myLocalImage23 from "../../assets/appledf.jpg";
import myLocalImage24 from "../../assets/iphone7.jpg";
import myLocalImage25 from "../../assets/Iphone11.jpg";
import myLocalImage26 from "../../assets/apples7.jpg";
import myLocalImage27 from "../../assets/iphone12.jpg";
import myLocalImage28 from "../../assets/Iphonexr.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const products = [
  {
    id: 1,
    title: "Apple series 7 - Refurbished",
    rating: 4.5,
    reviews: 361,
    price: 19399,
    originalPrice: 39499,
    monthlyPrice: 969,
    image: myLocalImage23,
  },
  {
    id: 2,
    title: "Apple iPhone 7 - Refurbished",
    rating: 4.6,
    reviews: 200,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage24,
  },
  {
    id: 3,
    title: "Apple iPhone 11 - Refurbished",
    rating: 4.7,
    reviews: 100,
    price: 49999,
    originalPrice: 79999,
    monthlyPrice: 1999,
    image: myLocalImage25,
  },
  {
    id: 4,
    title: "Apple series 11 - Refurbished",
    rating: 4.5,
    reviews: 361,
    price: 19399,
    originalPrice: 39499,
    monthlyPrice: 969,
    image: myLocalImage26,
  },
  {
    id: 5,
    title: "Apple iPhone 7 - Refurbished",
    rating: 4.6,
    reviews: 200,
    price: 29999,
    originalPrice: 52999,
    monthlyPrice: 1499,
    image: myLocalImage27,
  },
  {
    id: 6,
    title: "Apple iPhone 11 - Refurbished",
    rating: 4.7,
    reviews: 100,
    price: 49999,
    originalPrice: 79999,
    monthlyPrice: 1999,
    image: myLocalImage28,
  },
];

const ProductCard = ({ product }) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Card
      sx={{
        maxWidth: 345,
        border: `1px solid ${red[500]}`,
        borderRadius: 2,
        margin: "0 auto",
      }}
    >
      <CardMedia
        component="img"
        height="340"
        image={product.image}
        alt={product.title}
      />
      <Box
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          bgcolor: red[500],
          color: "white",
          padding: "2px 8px",
          borderRadius: 1,
          fontSize: "0.75rem",
        }}
      >
        Stock Out Soon
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            precision={0.5}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ marginLeft: 1 }}
          >
            ({product.reviews})
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: red[100],
            padding: "4px 8px",
            borderRadius: 1,
            my: 1,
            display: "inline-block",
          }}
        >
          <Typography variant="body2" color="error">
            Ends in 50m 47s
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          Starting from
        </Typography>
        <Typography variant="h6" color="textPrimary">
          ₹{product.monthlyPrice}/month
        </Typography>
        <Typography variant="h5" color="textPrimary">
          -{discount}% ₹{product.price.toLocaleString()}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textDecoration: "line-through" }}
        >
          ₹{product.originalPrice.toLocaleString()}
        </Typography>
        <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
          Get this for as low as ₹{product.price.toLocaleString()}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Free Delivery • COD Available
        </Typography>
      </CardContent>
    </Card>
  );
};

const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <Box
    {...props}
    sx={{
      position: "absolute",
      left: -35,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
    }}
  >
    <ArrowBackIosIcon style={{ color: "black", fontSize: "30px" }} />
  </Box>
);

const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <Box
    {...props}
    sx={{
      position: "absolute",
      right: -35,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
    }}
  >
    <ArrowForwardIosIcon style={{ color: "black", fontSize: "30px" }} />
  </Box>
);

const ProductList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
    <Slider {...settings}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Slider>
  );
};

const App = () => {
  return (
    <Box sx={{ padding: 2, maxWidth: 1450, margin: "0 auto" }}>
      <Typography variant="h3" sx={{ padding: 2 }}>
        Buy Refurbished Phones
      </Typography>
      <ProductList />
    </Box>
  );
};

export default App;
