import React, { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import Footer from "../components/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Photo from "/src/assets/ProfilePic.jpg";
import { useWindowSize } from "../hooks";
import { storage } from '../../firebase-config'
import { ref, getDownloadURL } from 'firebase/storage';

const AboutMe: React.FC = () => {
  const { width } = useWindowSize();

  const [loading, setLoading] = useState<boolean>(false);


  const handlePortfolioClick = async () => {
    setLoading(true);
    try {
      const pdfRef = ref(storage, 'Luna_Luovula_CV.pdf');

      const url = await getDownloadURL(pdfRef);
      console.log('url, url')

      window.open(url, '_blank');
    } catch (err: any) {
      console.error('Error fetching PDF:', err);
      alert('Failed to load the portfolio. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="AboutMePage">
      <Box className="Intro">
        {width < 750 && <Box className='Centered' width={'100%'}><Box className="SinglePic Centered"><img src={Photo}></img></Box></Box>}
        <Box className='Main'>
          <Box>
            <Box className="T1">Luna Luovula</Box>
            <Box className="ST">- A Rhythmic Journey </Box>
            <Box className="Content">
              Luna Luovula, a professional tap dancer, embodies a profound passion
              and an unwavering commitment to honor the history of tap dance as a
              Black American art form and its deep African roots. Within her
              performance and teaching she incorporates the rich history that is
              intertwined with jazz music.
            </Box>
          </Box>
          {width > 750 && <img src={Photo}></img>}
        </Box>

        <br />
        <Accordion defaultExpanded className="Accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="T2"
          >
            Around the Globe
          </AccordionSummary>
          <AccordionDetails>
            <Box className="Content">
              Luna's tap dance journey is a tapestry woven with the wisdom of
              legends and diverse educational experiences:
            </Box>
            <br />
            <Box className="T3">Protege of Reggio "The Hoofer" McLaughlin:</Box>
            <Box className="Content">
              When only 14 years old, Luna had the privilege of travelling to Chicago and learning from
              Reggio, a legendary figure in the world of tap. Under his
              mentorship, she delved deep into the art's rich history and
              traditions such as the basic steps and routines of The Copasetics.
            </Box>
            <br />
            <Box className="T3">Barcelona Professional Training:</Box>
            <Box className="Content">
              Her education took her to Barcelona, where she underwent a
              professional training program under the guidance of Guillem Alonso at the
              Escola Luthier Musica y Danca, further enriching her tap dance
              repertoire.
            </Box>
            <br />
            <Box className="T3"> Jimmy Slyde Institute: </Box>
            <Box className="Content">
              While in Barcelona, Luna also studied tap dance at the famous Jimmy Slyde Institute,
              taught by Roxane Butterfly. The spiritual environment and vast library of Jimmy Slyde Institute, rich in footage and history
              of tap dance allowed Luna to explore her own identity and expression in a culturally aware context.
            </Box>
            <br />
            <Box className="T3"> Music department at Helsinki University of Arts Sibelius Academy: </Box>
            <Box className="Content">
              Luna's passion for music led her to the Music Department at Helsinki University of Arts
              Sibelius Academy, where she explored the connection between tap dance and music. Jazz rhythms, history of jazz music,
              and piano accompaniment.
            </Box>
            <br />
            <Box className="T3">Orff Music Pedagogy Certified Course: </Box>
            <Box className="Content">
              Luna's dedication to understanding rhythm led her to pursue an
              Orff music pedagogy certified course, enhancing her knowledge of
              teaching musicality through movement.
            </Box>
            <br />
            <Box className="T3"> Continued Learning in Taipei:</Box>
            <Box className="Content">
              Currently, Luna continues her journey by studying the Henry Le
              Tang style in Taipei, a testament to her unwavering dedication to
              the art of tap dance.
            </Box>
            <br />
            <Box className="T3">Performing with Tap Radio: </Box>
            <Box className="Content">
              Luna's rhythmic journey has also seen her perform with Tap Radio
              all around Taiwan, captivating audiences with her tap dancing skills and onstage charisma.
            </Box>
            <br />
            <Box className="T3"> Tap dance studies in improvisation: </Box>
            <Box className="Content">
              Training at Broadway
              Dance Center and Steps on Broadway in New York with the
              multitalented Jared Grimes, Cirque Du Soleil tap dancer Joseph
              Wiggan and Derick K Grant the producer of Imagine Tap. Throughout
              her journey, Luna has nurtured her improvisational skills in jam
              sessions held in iconic cities like New York, Tokyo, Taipei, and
              Helsinki. These sessions allowed her to explore the spontaneous
              and creative aspects of tap dance, further enriching her unique
              style and deepening her connection to the roots of the artform
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion className="Accordion" >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="T2"
          >
            From studio to the big screen
          </AccordionSummary>
          <AccordionDetails>
            <Box className="Content">
              Luna's tap dance journey hasn't been limited to the stage. She has
              left her rhythmic mark on the screen and in collaborations:{" "}
            </Box>
            <br />
            <Box className="T3">Movies:</Box>
            <Box className="Content">
              Luna's tap dance performances have graced notable films, including
              "Flowers of Evil" and "The First Kiss of the Night."{" "}
            </Box>
            <br />
            <Box className="T3">Netflix Series:</Box>
            <Box className="Content">
              Luna's captivating personality was featured in the popular Netflix
              series, "Mom, Don't Do That."{" "}
            </Box>
            <br />
            <Box className="T3">Documentary: </Box>
            <Box className="Content">
              Luna was interviewed as Reggio "The Hoofer" McLaughlin's protegee
              in the documentary "Reggio and Brownie: A Timeless Friendship,"
              celebrating the friendship between tap legends.{" "}
            </Box>
            <br />
            <Box className="T3">YouTube Collaboration: </Box>
            <Box className="Content">
              Luna collaborated with Maine Meinung in their YouTube VGM (Video
              Game Music) covers, adding her unique rhythmic flair to their
              captivating videos.{" "}
            </Box>

            <br />
            <Box className="Content">
              Luna has also received recognition in Finnish newspapers, one of
              them being the oldest newspaper in Finland, with articles
              featuring her authentic and captivating tap dancing performances.
              One article highlights her bold and immersive dance as a joyful
              musical solo while another showcases her studies at a Barcelona
              musical school and her encounter with the legendary tap dancer
              Ernest 'Brownie' Brown
            </Box>
          </AccordionDetails>
        </Accordion>

        <Accordion className="Accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="T2"
          >
            Festival Star
          </AccordionSummary>
          <AccordionDetails>
            <Box className="Content">
              Luna's tap dance has graced prestigious festivals
              worldwide, including:
              <br />
              <ul>
                <li>Stockholm Tap Festival (2010-2018)</li>
                <li>
                  Chicago Human Rhythm Project Tap Dance Festival (2007, 2012)
                </li>
                <li>Helsinki Tap Festival (2007, 2012)</li>
                <li>Tap Together in Taiwan (2010)</li>
                <li>Tap City in New York (2012)</li>
                <li>St. Louis Tap Festival (2012)</li>
                <li>Los Angeles Tap Festival (2012)</li>
                <li>Motorcity Tap Festival in Detroit (2012)</li>
                <li>New Jersey Tap Fest (2012)</li>
                <li>Tokyo International Tap Festival (2019)</li>
              </ul>
              Guided by Masters: Her journey in tap dance has led her to study
              with some of the most renowned tap dancers and educators worldwide
              including but not limited to:
              <ul>
                <li>
                  Henry Le Tang Style: Traditional routines from Jeremy Kiesman and Lance Pong.
                </li>
                <li>
                  Eddie Brown Style: Traditional routines and scientific rhythm
                  from Heather Cornell.
                </li>
                <li>
                  Leon Collins Style: Traditional routines from Dianne Walker and Barbara Duffy.
                </li>
                <li>
                  Four Step Brothers Style: Traditional routines and steps from Robert L. Reed.
                </li>
                <li>LaVaughn Robinson style: Traditional routines from Robert F. Burden Jr. and Huang Yuching</li>
                <li>Relaxed technique: Sam Weber</li>
                <li>
                  Present-day technique and style with Dormeshia Sumbry-Edwards,
                  Michelle Dorrance, Derick Grant and Jason Samuels Smith
                </li>
                <li>
                  Body Percussion: Max Pollak, Nicholas Young and Keith Terry
                </li>
              </ul>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* "See Full Portfolio" Button */}
        <Box className='Centered' mt={4}>
          <Button
            className="Portfolio"
            onClick={handlePortfolioClick}
            disabled={loading}
            variant="contained"
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Click to see the full Portfolio'}
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default AboutMe;
