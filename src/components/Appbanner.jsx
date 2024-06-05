import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import GooglePlayImage from "../assets/google-play.jpg";
import AppStoreImage from "../assets/apple-store.jpg";
import AppImage from "../assets/appbaner.jpg";

function DownloadAppBanner() {
  return (
    <Box sx={{ marginTop: 10 }}>
      <Box
        sx={{
          backgroundColor: "#34C2C6",
          padding: 4,
          borderRadius: 2,
          maxWidth: 1400,
          margin: "auto",
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" color="white" gutterBottom>
              Download the App
            </Typography>
            <Typography variant="h6" color="white" gutterBottom>
              Sell your old phone | Buy top-quality refurbished phones | Get
              your phone repaired
            </Typography>
            {
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={GooglePlayImage}
                    alt="Google Play"
                    style={{ width: "150px" }}
                  />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={AppStoreImage}
                    alt="App Store"
                    style={{ width: "150px" }}
                  />
                </Box>
              </Box>
            }
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src={AppImage}
                alt="App Screenshot"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default DownloadAppBanner;
