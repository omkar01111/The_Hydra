import React from "react";
import "../Style/home.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import img from "../Assets/HYDRA (1).png";
// import video from "../Assets/video/HYDRA.mp4";
import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { TbMail } from "react-icons/tb";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <Box>
    <HeroSection/>

      {/* introduction section */}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "87%" ,
          height: "auto",
          position: "relative",
          margin: "50px auto",
          borderRadius: { xs: "30px", sm: "100px" },
          background: "rgb(58,52,86)",
          background:
            "radial-gradient(circle, rgba(58,52,86,1) 12%, rgba(33,30,46,1) 100%)",
          
        }}
      >
        <Box
          sx={{
            borderRight: { sm: "1px solid var(--secondary-color)", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            padding: "33px 8px",
            width:{sm:'300px',xs:'200px'} ,
            borderBottom: {
              xs: "1px solid var(--secondary-color)",
              sm: "none",
            },
          }}
        >
          <Stack paddingRight={"10px"}>
            <FiMapPin fontSize={"50px"} color="var(--secondary-focus)" />
          </Stack>
          <Stack justifyContent={"space-between"}>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              sx={{
                fontSize: { lg: "25px", md: "20px", sm: "15px" },
              }}
            >
              Pay us a Vist
            </Typography>
            <Typography
              variant="p"
              fontWeight={"light"}
              sx={{ fontSize: { lg: "13px", md: "10px", sm: "8px" } }}
            >
              Union St, Seattle, WA98101, United State
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            borderRight: "1px solid var(--secondary-color)",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            padding: "33px 8px",
            width: "29%",
          }}
        >
          <Stack paddingRight={"10px"}>
            <FiPhoneCall fontSize={"50px"} color="var(--secondary-focus)" />
          </Stack>
          <Stack justifyContent={"space-between"}>
            <Typography variant="h5" fontWeight={"bold"}>
              Give Us a Call
            </Typography>
            <Typography variant="p" fontWeight={"light"} fontSize={"13px"}>
              70231011068
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            justifyContent: "space-evenly",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            padding: "33px 8px",
            width: "29%",
          }}
        >
          <Stack paddingRight={"10px"}>
            <TbMail fontSize={"50px"} color="var(--secondary-focus)" />
          </Stack>
          <Stack justifyContent={"space-between"}>
            <Typography variant="h5" fontWeight={"bold"}>
              Send us a Message
            </Typography>
            <Typography variant="p" fontWeight={"light"} fontSize={"13px"}>
              Hellhydra@vengers.com
            </Typography>
          </Stack>
        </Box>
      </Box>
     
    </Box>
  );
};

export default Home;
