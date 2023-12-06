import { Box, Button, Container, IconButton, Typography } from '@mui/material';
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
        <Box className="bg-black">
     <Container>    
     <Box className="text-center">
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
           <Box className="w-full text-center ">
            {navItems.map((item) => (
            <Link key={item} href={item.pathname}>

                <Button className="text-white mx-3 ">
                    {item.route}
                </Button>
            </Link>
            ))}
          </Box>
<Typography className='text-center'>@ 2024 The Dragon News</Typography>
          </Container>
         </Box>
    );
};

export default Footer;