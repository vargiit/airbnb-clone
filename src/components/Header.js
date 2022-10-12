import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  dFlex,
  displayOnDesktop,
  flexBetweenCenter,
} from "../themes/commonStyles";
import Logo from "./Logo";
import LocationSearch from "./LocationSearch";
import ProfileSettings from "./ProfileSettings";
import MobileSearch from "./MobileSearch";
const Header = () => {
  return (
    <Box sx={{ ...dFlex, minHeight: 70, borderBottom: "1px solid #ddd" }}>
      <Container maxWidth="xl">
        <Box sx={{ ...flexBetweenCenter, minHeight: 90, px: 4 }}>
          <Box sx={displayOnDesktop}>
            <Logo />
          </Box>
          <Box sx={displayOnDesktop}>
            <LocationSearch></LocationSearch>
          </Box>
          <Box sx={displayOnDesktop}>
            <ProfileSettings></ProfileSettings>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MobileSearch></MobileSearch>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
