import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import ExpandedBanner from "../assets/ExpandedBanner.webp";
import Banner from "../assets/Banner.webp";
import Footer from "../components/Footer";
import { useWindowSize } from "../hooks";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const Home: React.FC = () => {
  const { width } = useWindowSize();
  const [newsItem, setNewsItem] = useState<{ Details: string[]; Title: string; Link: string } | null>(null);

  useEffect(() => {
    const docRef = doc(db, "News", "Current"); 

    const fetchDoc = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNewsItem(docSnap.data() as { Details: string[]; Title: string; Link: string });
      } else {
        console.log("No such document!");
      }
    };

    fetchDoc();
  }, []);
  const News = {
    name: "Gospel meets Jazz",
    date: "2023/11/13",
    time: "19:00",
    location: "Chung Yuan Christian University, Concert Hall",
  };
  return (
    <Box className="HomePage">
      <Box className='BannerBox'>
        <img
          className={`Banner ${width < 800 ? "Expanded" : ""}`}
          src={width === 0 ? Banner : width < 800 ? ExpandedBanner : Banner}
          height='600' width='400'
          alt="Banner"
        />
        <Box className={`OverText ${width < 800 ? "SmallerScreen" : ""}`}>
          Experience the Authentic and Rooted essence of tap dance, a living
          embodiment of the rhythmic soul of jazz music and the Africanist
          aesthetics that define this rich Black American art form.
        </Box>
      </Box>
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
      {newsItem && <Box className="News">
        <Box className='Title'>{newsItem.Title}</Box>
        <Box className='Content'>
          {newsItem.Details.map((detail, idx) => <Box className='Details' key={idx}>{detail}</Box>)}
        </Box>
        <Box className='EventFooter'>
          More details (<a className="Link" href={!!newsItem.Link ? newsItem.Link : ''}>here</a>) links to the classes and events page.
        </Box>
      </Box>}
      <Box className="SubIntro">
        I offer tap dance and body percussion classes in Taipei. I'm available
        for collaboration, performance, workshops, and choreography projects.
      </Box>
      <Button className="Collab" onClick={() => { window.open('link', '_blank') }}>Let's Collaborate!</Button>
      <Footer />
    </Box>
  );
};

export default Home;
