import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import myLocalImage43 from "../assets/iphone-sam.jpg";
import myLocalImage44 from "../assets/1-4.jpg";
import myLocalImage45 from "../assets/Samsung-Galaxy.jpg";
import myLocalImage46 from "../assets/Nothing.jpg";

const Sellsmart = () => {
  return (
    <Typography
      variant="h4"
      sx={{ maxWidth: 1400, margin: "auto", paddingTop: "2%" }}
    >
      Be Smart #Sell Smart
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
              image={myLocalImage43}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                iphone vs Samsung
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage44}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                iphone vs Vivo
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage45}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Samsung
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 340 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              image={myLocalImage46}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Motrolla
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Card>
    </Typography>
  );
};

export default Sellsmart;
