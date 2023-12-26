import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import Link from 'next/link';

const Footer = () => {

    const navItems   = [
        {
        route:"Home",
        pathname:"/"
    },
    
        {
        route:"All Categories",
        pathname:"/categories/news?category=all-news"
    },
    {
      route:"Sports",
      pathname:"/categories/news?category=sports"
  },
        {
        route:"Entertainment",
        pathname:"/categories/news?category=entertainment"
    },
        {
        route:"Technology",
        pathname:"/categories/news?category=technology"
    },
        {
        route:"Culture",
        pathname:"/categories/news?category=culture"
    },
    ];
    
    return (
        <Box className="bg-black px-2 py-10 mt-5">
     <Container>
     <Box className="w-full text-center" sx={{
            "& svg":{
                color:"white"
                },
         }}>
           <IconButton>
             <Link href={'https://www.facebook.com/'} target='0'><FacebookIcon/></Link>
            </IconButton>
            <IconButton>
            <Link href={'https://www.instagram.com/'} target='0'><InstagramIcon/></Link>
            </IconButton>
            <IconButton>
            <Link href={'https://twitter.com/'} target='0'><TwitterIcon/></Link>
            </IconButton>
          </Box>
          <Box className="w-full text-center">
            {navItems.map((item) => (
            <Link key={item} href={item.pathname}>
                <button className="text-white mx-3">
                    {item.route}
                </button>
            </Link>
            ))}
          </Box>
      <Typography variant='body2' color="gray" textAlign={"center"} className='mt-3'>@ 2023 The Dragon News. Designed by Faisal</Typography>
     </Container>    
  
         </Box>
    );
};

export default Footer;