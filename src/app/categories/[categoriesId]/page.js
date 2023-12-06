import { getCategoryNews } from '@/utils/getCategoryNews';
import { Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import topNews2 from '../../../assets/Rectangle11.png'
import Image from 'next/image';
import Link from 'next/link';

const DynamicNewsPage = async ({searchParams}) =>{ 
const {data}= await getCategoryNews(searchParams.category)

    return (
        <div className='my-5 ml-5'>
            <h1> <span className='font-bold'>{searchParams.category}</span> : {data.length}</h1>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
     
     
   {
    data.map(news=>(   <Grid key={news.id} item xs={6}>
<Link href={`/${news.category.toLowerCase()}/${news._id}`}>        <Card>
      <CardActionArea>
        <CardMedia sx={{
            "& img":{
                width: "100%",
                height: "250px"
            }
        }}>
            <Image width={800} height={800} src={news.thumbnail_url} alt="top news"/>
        </CardMedia>
        <CardContent>
        <p className=' bg-red-500 w-[100px] p-2 text-white my-2 rounded-base rounded'>{news.category}</p>
          <Typography
           variant='h6' className='font-bold'>
        {news.title.length>23? news.title.slice(0, 23)+"...": news.title}
          </Typography>
          <Typography >
          By {news.author.name} - {news.author.published_date}
          </Typography>
       <Divider className='pt-2 mb-2'></Divider>
          <Typography variant="body2" color="text.secondary">
      {news.details.length>350? news.details.slice(0, 350) + "...": news.details }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card></Link>
        </Grid>))
   }
      </Grid>
        </div>
    );
};

export default DynamicNewsPage;