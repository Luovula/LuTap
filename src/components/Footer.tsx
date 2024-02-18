import React from "react";
import { Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return <Box className="Footer">
      <InstagramIcon className="Icon" onClick={()=>{window.open('https://www.instagram.com/lunathehoofer?igsh=N3Y2b3Fpdnp1MDZr&utm_source=qr','_blank')}}/>
      <YouTubeIcon className="Icon" onClick={()=>{window.open('','_blank')}}/>
      <LinkedInIcon className="Icon" onClick={()=>{window.open('','_blank')}}/>
    </Box>;
};

export default Footer;
