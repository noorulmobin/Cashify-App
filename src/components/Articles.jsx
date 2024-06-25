import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import myLocalImage51 from "../assets/article1.jpg";
import myLocalImage52 from "../assets/article2.jpg";
import myLocalImage53 from "../assets/article3.jpg";

const Articles = () => {
  return (
    <Box sx={{ background: "#f3f4f7" }}>
      <Typography
        variant="h4"
        sx={{
          maxWidth: 1400,
          margin: "auto",
          paddingTop: "2%",
          flexWrap: "wrap",
        }}
      >
        Trending Articles
        <Card
          sx={{
            maxWidth: 1400,
            margin: "auto",
            paddingTop: "8px",
            gap: 3,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Card sx={{ maxWidth: 440 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={myLocalImage51}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h5">
                  How to Get Coursera Courses for Free with Certificates
                </Typography>
                <Typography gutterBottom variant="body1">
                  Here is a detailed a list of all the features that will arrive
                  with the upcoming Samsung One UI 7 Update and when your phone
                  will receive it. 17th May 2024
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 440 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={myLocalImage52}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h5">
                  How to Get Coursera Courses for Free with Certificates
                </Typography>
                <Typography gutterBottom variant="body1">
                  It is needless to say taking an Amazon Prime subscription plan
                  increases your savings to many folds. There are tons of
                  benefits with the subscription plan, a user can enjoy while
                  shopping, entertainment, reading, music and so on. If you
                  haven’t yet subscribed to it, this article is going to be
                  super useful for you.… 23rd May 2024
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 440 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image={myLocalImage53}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="h5">
                  How to Get Coursera Courses for Free with Certificates
                </Typography>
                <Typography gutterBottom variant="body1">
                  Coursera is a leading online platform that offers a range of
                  Courses courses for free for different subjects and
                  specializations. All the courses offered by Coursera are
                  curated by university professors from leading colleges like
                  Yale University, and Princeton University. These Coursera
                  courses for free help to develop a skill set that keeps you
                  ahead… 24th May 2024
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Card>
      </Typography>
    </Box>
  );
};

export default Articles;
