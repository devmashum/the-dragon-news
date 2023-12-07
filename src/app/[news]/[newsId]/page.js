import { getSingleNews } from '@/utils/getSingleNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async ({params}) => {
    const {data: news} = await getSingleNews(params.newsId);
    return (
        <Box className='mt-5 text-black '>
            {/* {params.newsId} */}

            <Container>
            <Grid container spacing={2}>
  <Grid item lg={6}>
    <Image 
    src={news.thumbnail_url} 
    alt='news' 
    width={800} 
    height={500}/>
  </Grid>
  <Grid item lg={6}>
  <Typography variant='h5' className='font-bold mb-5'>{news.title}</Typography>
  <Box className="mt-2" sx={{
    display: "flex",
    gap: 3,
    alignItem: "center",
    alignItems:'center',
  }}>
  <Avatar alt="author" src={news.author.img} />
  <Typography variant='h5' className='text-base font-bold'>{news.author.name}</Typography>
  <Typography variant='h5' className='text-base'> Published Date: {news.author.published_date}</Typography>
  </Box>
  <Typography  style={{
    textAlign:'justify',
    whiteSpace: 'pre-line',
    marginTop: '20px'
  }}> Published Date: {news.details}</Typography>
  </Grid>
  
</Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;