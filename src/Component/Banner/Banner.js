import { Container, Typography } from "@mui/material";
import React from "react";
import "./Banner.css";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="banner-content">
        <div className="tagline">
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: "white",
            }}
          >
            Crypto Tracker
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              marginBottom: 50,
            }}
          >
            Get all the Info ragarding Your Crypto Currency
          </Typography>
          <Carousel
            style={{
              height: "50%",
              display: "flex",
              alignItems: "center",
            }}
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
