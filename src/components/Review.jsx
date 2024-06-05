import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import myLocalImage58 from "../assets/review1.jpg";
import myLocalImage59 from "../assets/review2.jpg";
import myLocalImage60 from "../assets/review3.jpg";
import myLocalImage61 from "../assets/review4.jpg";

const Review = () => {
  return (
    <Typography
      variant="h4"
      sx={{ maxWidth: 1400, margin: "auto", paddingTop: "2%" }}
    >
      Latest Reviews
      <Card
        sx={{
          maxWidth: 1400,
          margin: "auto",
          paddingTop: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage58}
              alt="green iguana"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Realme GT 6T Review: Powerful Performance At Unbeatable Price
            </Typography>
            <Typography>3rd Jun 2024</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage59}
              alt="green iguana"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Tecno Camon 30 5G Review: Amazing Cameras At Affordable Price
            </Typography>
            <Typography>23rd May 2024</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage60}
              alt="green iguana"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Realme Narzo 70x Review: The New Budget All-Rounder?
            </Typography>
            <Typography>11th May 2024</Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage61}
              alt="green iguana"
            />
          </CardActionArea>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Vivo T3x 5G Review: New Budget Battery Beast!
            </Typography>
            <Typography> 5th May 2024</Typography>
          </CardContent>
        </Card>
      </Card>
    </Typography>
  );
};

export default Review;
