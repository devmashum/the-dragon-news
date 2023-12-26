import { getAllNews } from '@/utils/getAllNews';
import { getSingleNews } from '@/utils/getSingleNews';
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsDetailsPage = async ({params}) => {
    const {data: news} = await getSingleNews(params.newsId);
    const {data} = await getAllNews();
    return (
        <Box className='mt-5 text-black '>
            {/* {params.newsId} */}

            <Container>
            <Grid container spacing={2}>
  <Grid item lg={8}>
  <Typography variant='h5' className='font-bold mb-2'>{news.title}</Typography>
<div className='flex items-center gap-5 mb-2'>
<Avatar alt="author" src={news.author.img} />
<Typography variant='h5' className='text-base font-bold'>{news.author.name}</Typography>
  <Typography>{news.author.published_date}</Typography>
</div>
    <Image 
    src={news.thumbnail_url} 
    alt='news' 
    width={800} 
    height={500}/>

  <Box className="mt-2" sx={{
    display: "flex",
    gap: 3,
    alignItem: "center",
    alignItems:'center',
  }}>

  <Typography variant='h5' className='text-base'></Typography>
  </Box>
  <Typography  style={{
    textAlign:'justify',
    whiteSpace: 'pre-line',
    marginTop: '20px'
  }}> Published Date: {news.details}</Typography>
  </Grid>
  <Grid item lg={4}>
  <Typography variant='h5'>Latest News</Typography>
  {
  data.slice(2,5).map((news) => (
    <Grid className='mb-5' key={news._id} item xs={0} >
      <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image width={800} height={800} src={news.thumbnail_url} alt="top news" />
            </CardMedia>
            <CardContent>
              <p className='bg-red-500 w-[100px] p-2 text-white my-2 rounded-base rounded'>{news.category}</p>
              <Typography className='font-bold'>
                {news.title}
              </Typography>
              <Typography>
                {news.author.published_date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {news.details.length > 350 ? news.details.slice(0, 50) + "..." : news.details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  ))
}
  </Grid>
  
</Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;