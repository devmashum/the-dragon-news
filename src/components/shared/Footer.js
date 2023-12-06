import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react';
import Link from 'next/link';

const Footer = () => {

const navItems   = [
    {
    route:"Home",
    pathname:"/"
},
    {
    route:"Pages",
    pathname:"/pages"
},
    {
    route:"Category",
    pathname:"/category"
},
    {
    route:"News",
    pathname:"/news"
},
    {
    route:"About",
    pathname:"/about"
},
    {
    route:"Contact",
    pathname:"/contact"
},
];
    return (
        <Box className="bg-black px-2 py-10">
     <Container>
     <Box className="w-full text-center" sx={{
            "& svg":{
                color:"white"
                },
         }}>
           <IconButton>
                <FacebookIcon/>
            </IconButton>
            <IconButton>
                <FacebookIcon/>
            </IconButton>
            <IconButton>
                <FacebookIcon/>
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