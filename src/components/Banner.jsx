import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import myLocalImage27 from "../assets/banner.png"; // Adjusted path

export default function MultiActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 1400,
        margin: "auto",
        paddingTop: "5px ",
        flexWrap: "wrap",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={myLocalImage27}
          alt="banner"
        />
      </CardActionArea>
    </Card>
  );
}
