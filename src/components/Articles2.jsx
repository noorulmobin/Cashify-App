import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import myLocalImage54 from "../assets/article4.jpg";
import myLocalImage55 from "../assets/article5.jpg";
import myLocalImage56 from "../assets/article6.jpg";
import myLocalImage57 from "../assets/article7.jpg";

const articles = [
  {
    title: "How To Delete Google Pay Transaction History - Easy Steps",
    date: "17th May 2024",
    image: myLocalImage54, // Directly assign the image path
  },
  {
    title: "How To File Income Tax Returns Online: Everything You Need To Know",
    date: "15th May 2024",
    image: myLocalImage55,
  },
  {
    title: "The Top 5 Slimmest Phones In India!",
    date: "13th May 2024",
    image: myLocalImage56,
  },
  {
    title: "AMD Ryzen 5 Vs AMD Ryzen 3: What Are We Missing?",
    date: "10th May 2024",
    image: myLocalImage57,
  },
];

function ArticleCard({ title, date, image }) {
  return (
    <Box sx={{ maxWidth: 1400, background: "#f3f4f7" }}>
      <Card
        sx={{
          display: "flex",
          mb: 2,
          maxWidth: 600,
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 351 }}
          image={image}
          alt={title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {date}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
}

function ArticleList() {
  return (
    <Box sx={{ flexGrow: 1, padding: "95px", background: "#f3f4f7" }}>
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ArticleCard
              title={article.title}
              date={article.date}
              image={article.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ArticleList;
