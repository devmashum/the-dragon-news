import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import topNews2 from '../../../assets/Rectangle9.png'
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';
import Link from 'next/link';

const SideBar = async () => {
  const {data} = await getAllNews();
    return (
        <Box  className="my-10 lg:ml-6 ml-2 ">
          
          {
data.slice(5,6).map((news)=>( <Link key={news._id} href={`/${news.category.toLowerCase()}/${news._id}`}>
        <Card>
          <CardActionArea>
            <CardMedia>
              <Image width={800} height={800} src={news.thumbnail_url} alt="top news" />
            </CardMedia>
            <CardContent>
              <p className='bg-red-500 w-[100px] p-2 text-white my-2 rounded-base rounded'>{news.category}</p>
              <Typography className='text-xl'>
                {news.title}
              </Typography>
              <Typography className='text-base'>
               {news.author.name} - {news.author.published_date}
              </Typography>
            
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
   ))
          }

          <Box>
<Container>

</Container>

          </Box>
                   {
data.slice(11,20).map((news)=>( <Link key={news._id} href={`/${news.category.toLowerCase()}/${news._id}`}>
        <Card className='p-2 bg-base-200 mt-3'>
          <CardActionArea className='flex justify-center items-center'>
         <div>
         <CardMedia className=''>
              <Image
    width={200}
    height={81}
    style={{
   
      objectFit: 'cover', // Maintain aspect ratio and cover the entire container
    }}  src={news.thumbnail_url} alt="top news" />
            </CardMedia>
         </div>
           <div>
           <CardContent className=''>
              <Typography className='text-base'>
                {news.title}
              </Typography>
              <Typography className='text-sm font-bold'>
               {news.author.published_date}
              </Typography>
            </CardContent>
           </div>
          </CardActionArea>
        </Card>
      </Link>
   ))
          }
        </Box>
    );
};

export default SideBar;