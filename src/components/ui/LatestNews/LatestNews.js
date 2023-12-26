import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from '../../../assets/topNews.png'
import topNews2 from '../../../assets/Rectangle11.png'
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';
import Link from 'next/link';

const LatestNews = async () => {
    const {data}= await getAllNews();
    
    return (
    <Box className="my-10">

<Link href={`/${data[0].category.toLowerCase()}/${data[0]._id}`}> <Card>
      <CardActionArea>
        <CardMedia>
            <Image width={800} height={800} src={data[0].thumbnail_url} alt="top news"/>
        </CardMedia>
        <CardContent>
        <p className=' bg-red-500 w-[100px] p-2 text-white my-2 rounded-base rounded'>{data[0].category}</p>
          <Typography gutterBottom variant="h5" component="div">
         {data[0].title}
          </Typography>
          <Typography >
          {data[0].author.name} - {data[0].author.published_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data[0].details.length>350? data[0].details.slice(0, 350) + "...": data[0].details }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Link>

    <Grid container rowSpacing={2} columnSpacing={{ xs:0, sm: 0, md: 6 }}>
    {
  data.slice(1, 5).map((news) => (
    <Grid  key={news._id} item xs={0} lg={6}>
      <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image width={800} height={800} src={news.thumbnail_url} alt="top news" />
            </CardMedia>
            <CardContent>
              <p className='bg-red-500 w-[100px] p-2 text-white my-2 rounded-base rounded'>{news.category}</p>
              <Typography>
                {news.title}
              </Typography>
              <Typography>
                {news.author.published_date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {news.details.length > 350 ? news.details.slice(0, 350) + "..." : news.details}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  ))
}
     </Grid>

    </Box>
    
    );
};

export default LatestNews;