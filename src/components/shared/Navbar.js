"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "@/assets/Group.png"
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';


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

function NavBar() {
    return (
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
      <Image src={logo} width={100} height={100} alt="logo"/>

          <Box className="w-full text-center">
            {navItems.map((item) => (
            <Link key={item} href={item.pathname}>

                <button className="text-white mx-3">
                    {item.route}
                </button>
            </Link>
            ))}
          </Box>
          <Box>
         <Stack direction="row" sx={{
            "& svg":{
                color:"white"
                },
         }}>   <IconButton>
                <FacebookIcon/>
            </IconButton>
            <IconButton>
                <FacebookIcon/>
            </IconButton>
            <IconButton>
                <FacebookIcon/>
            </IconButton></Stack>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;