import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import myLocalimage8 from "../../assets/sellphones.jpg";
import myLocalimage9 from "../../assets/BUYPHONES.jpg";
import myLocalimage10 from "../../assets/REPAIR.jpg";
import myLocalimage11 from "../../assets/NEARBYSTORES.jpg";
import myLocalimage12 from "../../assets/selllaptops.jpg";
import myLocalimage13 from "../../assets/findnew.jpg";
import myLocalimage14 from "../../assets/recycle.jpg";
import myLocalimage15 from "../../assets/smatwatches.jpg";

export default function MultiActionAreaCard() {
  return (
    <>
      <div id="ourservices">
        <Typography variant="h3" sx={{ maxWidth: 1450, margin: "auto" }}>
          Our Services
        </Typography>

        <Card
          sx={{
            maxWidth: 1450,
            margin: "auto",
            display: "flex",
            gap: 10,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={myLocalimage8}
              alt="Description of the image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Sell Phones
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={myLocalimage9}
              alt="Description of the image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Buy Phones
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={myLocalimage10}
              alt="Description of the image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Repair Phones
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={myLocalimage11}
              alt="Description of the image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Nearby Stores
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={myLocalimage12}
              alt="Description of the image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Sell Laptops
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={myLocalimage13}
              alt="Description of the image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                New phones
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={myLocalimage14}
              alt="Description of the image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Recycle
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={myLocalimage15}
              alt="Description of the image"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Smart watches
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
}
