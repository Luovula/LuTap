import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import ExpandedBanner from "../assets/ExpandedBanner.webp";
import Banner from "../assets/Banner.webp";
import Footer from "../components/Footer";
import { useWindowSize } from "../hooks";
import { collection, getDocs, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase-config';

interface NewsItem {
  id: string;
  Details: string[];
  Title: string;
  Link?: string;
  isBanner: boolean;
  date: string | Timestamp;
  time: string;
  location: string;
  name: string;
}

const Home: React.FC = () => {
  const { width } = useWindowSize();


  const [bannerNews, setBannerNews] = useState<NewsItem | null>(null);


  const [regularNews, setRegularNews] = useState<NewsItem[]>([]);


  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollection = collection(db, "News");

        const bannerQuery = query(
          newsCollection,
          where("isBanner", "==", true),
          orderBy("date", "desc")
        );
        const bannerSnapshot = await getDocs(bannerQuery);
        const bannerList: NewsItem[] = bannerSnapshot.docs.map(doc => ({
          ...(doc.data() as NewsItem),
          id: doc.id,
        }));

        console.log("Fetched Banner News:", bannerList);

        if (bannerList.length > 1) {
          console.warn("Multiple banner news items found. Only the latest one will be displayed.");
        }


        const selectedBanner = bannerList.length > 0 ? bannerList[0] : null;
        setBannerNews(selectedBanner);


        const regularQuery = query(
          newsCollection,
          where("isBanner", "==", false),
          orderBy("date", "desc")
        );
        const regularSnapshot = await getDocs(regularQuery);
        const regularList: NewsItem[] = regularSnapshot.docs.map(doc => ({
          ...(doc.data() as NewsItem),
          id: doc.id,
        }));

        console.log("Fetched Regular News:", regularList);

        setRegularNews(regularList);
      } catch (err: any) {
        console.error("Error fetching news:", err);
        setError(err.message || "Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box className="HomePage">
      {/* Display Error Message */}
      {error && (
        <Box className="Error" color="red" mb={2}>
          Error: {error}
        </Box>
      )}

      {/* Banner Section */}
      <Box className='BannerBox'>
        <img
          className={`Banner ${width < 800 ? "Expanded" : ""}`}
          src={width === 0 ? Banner : width < 800 ? ExpandedBanner : Banner}
          height='600'
          width='400'
          alt="Banner"
        />
        <Box className={`OverText ${width < 800 ? "SmallerScreen" : ""}`}>
          Experience the Authentic and Rooted essence of tap dance, a living
          embodiment of the rhythmic soul of jazz music and the Africanist
          aesthetics that define this rich Black American art form.
        </Box>
      </Box>

      {/* Upcoming Events Tag */}
      <Box className="TagBox">
        <Box className="UpcomingEventsTag">Upcoming Events</Box>
      </Box>

      {/* News Banner Section */}
      {bannerNews ? (
        <Box className="NewsBanner">
          {/* Name */}
          <Box className='SideContainer'>
            <Box className="Name">{bannerNews.name || "No Name Provided"}</Box>

            {/* Date and Time */}
            <Box className="Info">
              <Box className="Time">
                {bannerNews.date instanceof Timestamp
                  ? bannerNews.date.toDate().toLocaleDateString()
                  : bannerNews.date || "Date Not Provided"}{" "}
                {bannerNews.time || ""}
              </Box>
              <Box className="Location">{bannerNews.location || "Location Not Provided"}</Box>
            </Box>

            {/* Conditionally Render Title Only If Different from Name */}
            {bannerNews.Title && bannerNews.Title !== bannerNews.name && (
              <Box className="Title">{bannerNews.Title}</Box>
            )}

            {/* Details */}
            {bannerNews.Details && bannerNews.Details.length > 0 && (
              <Box className="Details">
                {bannerNews.Details.map((detail, index) => (
                  <Box className="DetailItem" key={index}>
                    {detail}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
          <Box className='SideContainer'>

            {/* Link as Button */}
            {bannerNews.Link ? (
              <Box className="Link">
                <Button
                  variant="contained"
                  className="CustomButton"
                  href={bannerNews.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Here
                </Button>
              </Box>
            ) : (
              <></>
            )}
          </Box>

        </Box>
      ) : (
        <>
        </>
      )}

      {/* Regular News Section */}
      {regularNews.length > 0 && regularNews.map((news) => (
        <Box className="News" key={news.id}>
          <Box className='Title'>{news.Title || "No Title Provided"}</Box>
          <Box className='Content'>
            {news.Details.map((detail, index) => (
              <Box className='Details' key={index}>{detail}</Box>
            ))}
          </Box>
          <Box className='EventFooter'>
            {news.Link ? (
              <>
                More details (<a className="Link" href={news.Link} target="_blank" rel="noopener noreferrer">here</a>) links to the classes and events page.
              </>
            ) : (
              "More details will be available soon."
            )}
          </Box>
        </Box>
      ))}

      {/* Sub Introduction */}
      <Box className="SubIntro">
        I offer tap dance and body percussion classes in Taipei. I'm available
        for collaboration, performance, workshops, and choreography projects.
      </Box>

      {/* Collaboration Button */}
      <Button
        className="Collab"
        onClick={() => { window.open('https://your-collaboration-link.com', '_blank') }}
      >
        Let's Collaborate!
      </Button>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
