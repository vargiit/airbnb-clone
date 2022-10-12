import "./App.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import OptionsTab from "./components/OptionsTab";
import LocationCards from "./components/LocationCards";
import Footer from "./components/Footer";
import FooterMenu from "./components/FooterMenu";
import { displayOnDesktop } from "./themes/commonStyles";
import MobileFooter from "./components/MobileFooter";
import { useEffect, useState } from "react";

function App() {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }
  const scrollDirection = useScrollDirection();
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
          <OptionsTab />
          <Container maxWidth="xl" sx={{ mb: 3 }}>
            <LocationCards />
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MobileFooter />
            </Box>
          </Container>
          <Box
            sx={{
              position: "fixed",
              width: "100%",
              backgroundColor: "#fff",
              bottom: scrollDirection === "down" ? "-24" : "0",
            }}
          >
            <Box sx={displayOnDesktop}>
              <Footer />
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <FooterMenu />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
