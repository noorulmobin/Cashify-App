import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import myLocalImage39 from "../assets/Oneplus.jpg";
import myLocalImage40 from "../assets/Camera.jpg";
import myLocalImage41 from "../assets/iPhone-14.jpg";
import myLocalImage42 from "../assets/iPhone14Pro.jpg";

export default function ActionAreaCard() {
  return (
    <Typography
      variant="h4"
      sx={{
        maxWidth: 1400,
        margin: "auto",
        padding: "1%",
      }}
    >
      Better For Pocket. Buy Refurbished
      <Card
        sx={{
          maxWidth: 1400,
          margin: "auto",
          paddingTop: "8px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage39}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Refurbished OnePlus 10
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage40}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                y15 S Vivo
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage41}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Iphone 14
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage42}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Iphone 14 Pro
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Card>
    </Typography>
  );
}
