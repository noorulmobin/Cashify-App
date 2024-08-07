import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import myLocalimage8 from "../../assets/sellphones.jpg";
import myLocalimage16 from "../../assets/selllaptops.jpg";
import myLocalimage17 from "../../assets/selltv.jpg";
import myLocalimage18 from "../../assets/selltablet.jpg";
import myLocalimage19 from "../../assets/sellearbuds.jpg";
import myLocalimage20 from "../../assets/sellsmarwatch.jpg";
import myLocalimage21 from "../../assets/sellspeaker.jpg";
import myLocalimage22 from "../../assets/more.jpg";
import Box from "@mui/material/Box";

export default function MultiActionAreaCard() {
  return (
    <>
      <div id="ourservices">
        <Typography
          variant="h3"
          sx={{ maxWidth: 1450, margin: "auto", flexWrap: "wrap" }}
        >
          Sell your Old Devices
        </Typography>

        <Box
          sx={{
            maxWidth: 1450,
            margin: "auto",
            display: "flex",
            gap: 5,
            flexWrap: {
              xs: "wrap",
              sm: "wrap",
              md: "nowrap",
              lg: "nowrap",
              xl: "nowrap",
            },
          }}
        >
          <card>
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
          </card>
          <card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={myLocalimage16}
                alt="Description of the image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sell laptops
                </Typography>
              </CardContent>
            </CardActionArea>
          </card>
          <card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={myLocalimage17}
                alt="Description of the image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sell TV
                </Typography>
              </CardContent>
            </CardActionArea>
          </card>
          <card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={myLocalimage18}
                alt="Description of the image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sell Tablets
                </Typography>
              </CardContent>
            </CardActionArea>
          </card>
          <card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={myLocalimage19}
                alt="Description of the image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sell Earbuds
                </Typography>
              </CardContent>
            </CardActionArea>
          </card>
          <card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={myLocalimage20}
                alt="Description of the image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sell SmartWatch
                </Typography>
              </CardContent>
            </CardActionArea>
          </card>
          <card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={myLocalimage21}
                alt="Description of the image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sell smart Speaker
                </Typography>
              </CardContent>
            </CardActionArea>
          </card>
          <card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={myLocalimage22}
                alt="Description of the image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sell More
                </Typography>
              </CardContent>
            </CardActionArea>
          </card>
        </Box>
      </div>
    </>
  );
}
