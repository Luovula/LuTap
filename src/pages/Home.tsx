import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import ExpandedBanner from "../assets/ExpandedBanner.jpg";
import Banner from "../assets/Banner.jpg";
import Footer from "../components/Footer";
import { useWindowSize } from "../hooks";



const Home: React.FC = () => {
  const { width } = useWindowSize();
  return (
    <Box className="HomePage">
      <img
        className={`Banner ${width < 800 ? "Expanded" : ""}`}
        src={width < 800 ? ExpandedBanner : Banner}
        alt="Banner"
      />
      {/* <Box className="TagBox">
        <Box className="TagBox">Upcoming Events</Box>
      </Box>
      <Box className="NewsBanner">
        <Box className="Name">{News.name}</Box>
        <Box className="Info">
          <Box className="Time"> {News.date + " " + News.time}</Box>
          <Box className="Location"> {News.location}</Box>
        </Box>
      </Box> */}
      <Box className="Intro">
        Experience the Authentic and Rooted essence of tap dance, a living
        embodiment of the rhythmic soul of jazz music and the Africanist
        aesthetics that define this rich Black American art form.
      </Box>
      <Button className="SignUp"  onClick={()=>{window.open('link','_blank')}}>Sign up for classes</Button>
      <Box className="SubIntro">
        I offer tap dance and body percussion classes in Taipei. I'm available
        for collaboration, workshops, and choreography projects.
      </Box>
      <Button className="Collab" onClick={()=>{window.open('link','_blank')}}>Let's Collaborate!</Button>
      <Footer />
    </Box>
  );
};

export default Home;

// const News = {
//   name: "Gospel meets Jazz",
//   date: "2023/11/13",
//   time: "19:00",
//   location: "Chung Yuan Christian University, Concert Hall",
// };
