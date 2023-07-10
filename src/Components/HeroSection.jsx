import React from "react";
import "../Style/home.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import img from "../Assets/HYDRA (1).png";
// import video from "../Assets/video/HYDRA.mp4";
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { TbMail } from "react-icons/tb";

const HeroSection = () => {
  return (
    <Box
      width={"100%"}
      bgcolor={"#343045"}
      display={"flex"}
      flexDirection={"row"}
      position="relative"
      paddingTop={"2%"}
      sx={{
        flexDirection: { xs: "column-reverse", md: "row" },
        height: { xs: "100%", md: "90vh" },
      }}
    >
      {/* left hero section */}
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
       
        height={"100%"}
        sx={{
          position: "relative",
          // top: { xl: "0%", md: "-15%" },
          top: { xs: "50%", md: "-15%", xl: "0%" },
          paddingLeft: { md: "10px" },
          width: { xs: "100%", md: "45%" },
          gap:{xs:'15px',md:'30px'},
        }}
      >
        <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
          <h1 className="heading">
            <span className="highlight">Dive</span> Into The Depths
          </h1>

          <h1 className="heading">
            Of <span className="highlight">Virtual Reality</span>
          </h1>
        </Stack>

        <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
          <p className="small-des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="small-des">
            Praesentium est cum neque iste dicta provident deser.
          </p>
          <p className="small-des">
            Facilis numquam eveniet sapiente est cumneque .
          </p>
        </Stack>

        <Stack
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          flexDirection={"row"}
        >
          <Button
            variant="contained"
            sx={{
              width: { lg: "200px", md: "180px", sm: "160px" },
              height: { lg: "48px", md: "44px", sm: "39px" },
              borderRadius: "23px",
              color: "var(--primary-color)",
              fontWeight: "bold",
              background:
                "linear-gradient(113deg, hsla(252, 26%, 57%, 1) 50%, hsla(251, 52%, 81%, 1) 100%);",
              fontSize: { lg: "15px", md: "12px", sm: "9px" },
              "&:hover": {
                background: "var(--primary-color)",
                color: "var(--secondary-color)",
                border: "1px solid var(--secondary-color)",
              },
            }}
          >
            Build Your World
          </Button>

          <Button
            size="large"
            variant="text"
            sx={{
              color: "white",
              fontSize: { lg: "20px", md: "12px", sm: "8px" },
              "&:hover": {
                background: "transparent",
                color: "red",
              },
            }}
          >
            <i class="fa-solid fa-arrow-right-long fa-beat"></i>
          </Button>
        </Stack>
      </Stack>

      {/* Right section hero section*/}
      <Stack
        width={"55%"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          paddingTop: { lg: "none", xl: "3%" },
          position: "relative",
          top: { xs: "50%", md: "-15%", xl: "0%" },
          paddingLeft: { md: "10px" },
          width: { sm: "100%", md: "55%" },
          height: { xs: "50vh",sm:'63vh' ,md: "auto" },
          marginTop:{xl:'2%',md:'0%'}
        }}
      >
        <img className="hero-image" src={img} alt="VR-image" />
        {/* <video src={video} autoplay loop muted /> */}
      </Stack>
    </Box>
  );
};

export default HeroSection;
