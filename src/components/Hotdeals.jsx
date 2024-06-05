import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import myLocalImage47 from "../assets/Hot1.jpg";
import myLocalImage48 from "../assets/hot2.jpg";
import myLocalImage49 from "../assets/hot3.jpg";
import myLocalImage50 from "../assets/hot4.jpg";

const Hotdeals = () => {
  return (
    <Box
      sx={{
        background: "#f3f4f7",
        height: "350px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ maxWidth: 1400, margin: "auto", paddingTop: "2%" }}
      >
        Hot Deals
        <Typography>Exciting offers for more value</Typography>
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
                image={myLocalImage47}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 340 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={myLocalImage48}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 340 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={myLocalImage49}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 340 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={myLocalImage50}
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </Card>
      </Typography>
    </Box>
  );
};

export default Hotdeals;
