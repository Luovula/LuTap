import React from "react";
import { Box } from "@mui/material";
import Banner from "../assets/Banner.jpg";
import Footer from "../components/Footer";

const News = {
  name: "Gospel meets Jazz",
  date: "2023/11/13",
  time: "19:00",
  location: "Chung Yuan Christian University, Concert Hall",
};

const Home: React.FC = () => {
  return (
    <Box className="HomePage">
      <img className="Banner" src={Banner} alt="Banner" />
      <Box className="TagBox">
        <Box className="TagBox">Upcoming Events</Box>
      </Box>
      <Box className="NewsBanner">
        <Box className="Name">{News.name}</Box>
        <Box className="Info">
          <Box className="Time"> {News.date + " " + News.time}</Box>
          <Box className="Location"> {News.location}</Box>
        </Box>
      </Box>
      <Box className="Intro">
        Experience the Authentic and Rooted essence of tap dance, a living
        embodiment of the rhythmic soul of jazz music and the Africanist
        aesthetics that define this rich Black American art form.
      </Box>
      <Box className="Reel">
        <Box className="File">reel</Box>
      </Box>
      <Box className="SubIntro">
        I offer tap dance and body percussion classes in Taipei. I'm available
        for collaboration, workshops, and choreography projects.
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
