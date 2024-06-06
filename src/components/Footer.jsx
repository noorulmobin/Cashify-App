import React from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import myLocalImage62 from "../assets/fb.jpg";
import myLocalImage63 from "../assets/insta.jpg";
import myLocalImage64 from "../assets/twiter.jpg";
import myLocalImage65 from "../assets/youtube.jpg";
import myLocalImage66 from "../assets/linkdin.jpg";
import logo from "../assets/logo.png"; // Assuming you have a logo.png in your assets

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white",
        py: 6,
        maxWidth: 1500,
        margin: "auto",
      }}
    >
      <Container maxWidth="1400">
        <Grid container spacing={4}>
          <Grid item xs={10} sm={6} md={2}>
            <img
              src={logo}
              alt="Logo"
              style={{
                display: "block",
                margin: "0 auto",
                marginBottom: "16px",
              }}
            />

            <Typography variant="h6" color="textPrimary" gutterBottom>
              Follow us on
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Link href="#">
                  <img
                    src={myLocalImage62}
                    alt="Facebook"
                    style={{ width: 30, height: 30 }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <img
                    src={myLocalImage63}
                    alt="Instagram"
                    style={{ width: 30, height: 30 }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <img
                    src={myLocalImage64}
                    alt="Twitter"
                    style={{ width: 30, height: 30 }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <img
                    src={myLocalImage65}
                    alt="YouTube"
                    style={{ width: 30, height: 30 }}
                  />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <img
                    src={myLocalImage66}
                    alt="LinkedIn"
                    style={{ width: 30, height: 0 }}
                  />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h3">Cashify</Typography>

          <Grid item xs={10} sm={6} md={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Services
            </Typography>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Sell Phone",
                "Sell Television",
                "Sell Smart Watch",
                "Sell Smart Speakers",
                "Sell DSLR Camera",
                "Sell Earbuds",
                "Repair Phone",
                "Buy Phone",
                "Recycle Phone",
                "Find New Phone",
                "Partner With Us",
              ].map((text) => (
                <li key={text} style={{ marginBottom: "8px" }}>
                  <Link
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={10} sm={6} md={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Company
            </Typography>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "About Us",
                "Careers",
                "Articles",
                "Press Releases",
                "Become Cashify Partner",
                "Become Supersale Partner",
              ].map((text) => (
                <li key={text} style={{ marginBottom: "8px" }}>
                  <Link
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={10} sm={6} md={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Sell Device
            </Typography>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Mobile Phone",
                "Laptop",
                "Tablet",
                "iMac",
                "Gaming Consoles",
              ].map((text) => (
                <li key={text} style={{ marginBottom: "8px" }}>
                  <Link
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={10} sm={6} md={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Help & Support
            </Typography>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["FAQ", "Contact Us", "Warranty Policy", "Refund Policy"].map(
                (text) => (
                  <li key={text} style={{ marginBottom: "8px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {text}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </Grid>
          <Grid item xs={10} sm={6} md={2}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              More Info
            </Typography>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Terms of Use",
                "E-Waste Policy",
                "Cookie Policy",
                "GDPR Compliance",
                "What is Refurbished",
                "Device Safety",
              ].map((text) => (
                <li key={text} style={{ marginBottom: "8px" }}>
                  <Link
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <Box mt={6}>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ mt: 4 }}
          >
            {
              "Registered Office: Manak Waste Management Pvt Ltd., B-39, 1st Floor, Middle Circle, Connaught Place, New Delhi-110001, India, Support-7290068900 | CIN: U27205DL2009PTC190441 "
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {
              "Manak Waste Management Pvt Ltd. is ISO 27001 & 27701 Compliance Certified. Person who may be contacted in case of any compliance related queries or grievances: Manoj Kumar (manoj.k@cashify.in)"
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {
              "** All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement."
            }
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ mt: 2 }}
          >
            {"Copyright © 2024 Cashify All rights reserved"}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
