"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '@/assets/Group.png'
import Image from 'next/image';
import Link from 'next/link';
import { Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Header from '../Header';


function NavBar() {
    const navItems   = [
        {
        route:"Home",
        pathname:"/"
    },
    
        {
          id:1,
        route:"All Categories",
        pathname:"/categories/news?category=all-news"
    },
    {
      id:2,
      route:"Sports",
      pathname:"/categories/news?category=sports"
  },
        {
          id:2,
        route:"Entertainment",
        pathname:"/categories/news?category=entertainment"
    },
        {
          id:4,
        route:"Technology",
        pathname:"/categories/news?category=technology"
    },
        {
          id:5,
        route:"Culture",
        pathname:"/categories/news?category=culture"
    },
    ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
   <>
   <Header></Header>
     <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
     <Link href={'/'}> <Image src={logo} alt='site logo'/></Link>
          </Typography>

          <Box  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu 
            anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.id}   >
                  <Link href={item.pathname}  textAlign="center">{item.route}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             <Image src={logo} alt='site logo'/>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', fontWeight:'600' } }}>
            {navItems.map((item) => (
            <Link className='w-full mx-auto text-center' key={item._id} href={item.pathname}
                sx={{ my: 2, color: 'white', display: 'block' }}>

                <button className="text-white mx-3" >
                    {item.route}
              
                </button>
            </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <Stack direction="row" sx={{
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
         </Stack>
       
            </Tooltip>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
   </>
  );
}
export default NavBar;
