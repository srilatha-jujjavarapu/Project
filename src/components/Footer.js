import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/FooterStyles.css'

const Footer = () => {
  return (
   <>
   <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',p:0.5, position:'absolute', bottom:'0', width:'100%'}}>
    <Box sx={{my:0.5,"& svg":{
        fontSize:"35px",
        curser:"pointer",
        mr:3,
    },
    "& svg:hover":{
        color:"goldenrod",
        transform:'translateX(5px)'
    
    }
    }}>
        {/* icons */}
        <InstagramIcon/>
        <XIcon/>
        <YouTubeIcon/>

    </Box>
    <Typography variant='h5' sx={{"@media (max-width:600px)":{
        fontSize:"0.5rem",
    },
    }}>
        All Rights Reserved &copy;  cvr college of engineering
    </Typography>
   </Box>
   </>
  )
}

export default Footer