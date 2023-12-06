import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import topNews2 from '../../../assets/Rectangle9.png'
import Image from 'next/image';

const SideBar = () => {
    return (
        <Box className="my-10 ml-6">
              
        <Card>
      <CardActionArea>
        <CardMedia>
            <Image width={800} height={800} src={topNews2} alt="top news"/>
        </CardMedia>
        <CardContent>
        <p className=' bg-red-500 w-[100px] p-2 text-white my-2 rounded-base rounded text-sm'>Technology</p>
          <Typography className='text-xl font-bold' variant="body2" >
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography className='text-base text-gray-500' >
          By Awlad Hossain - Mar 18 2023
          </Typography>
      
        </CardContent>
      </CardActionArea>
    </Card>
      
        </Box>
    );
};

export default SideBar;