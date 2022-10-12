import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { locations as cardLocation } from "../data/mock-data";
import CarouselCard from "./CarouselCard";

const LocationCards = () => {
  return (
    <Box sx={{ mx: 2 }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {cardLocation.map((location) => {
          return (
            <Grid item key={location.id} xs={12} sm={6} md={4} lg={3}>
              <CarouselCard location={location} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
