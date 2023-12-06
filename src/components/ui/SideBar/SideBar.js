import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import topNews2 from '../../../assets/Rectangle9.png'
import Image from 'next/image';

const SideBar = () => {
    return (
        <Box className="my-10 ml-5">
              
        <Card>
      <CardActionArea>
        <CardMedia>
            <Image width={800} height={800} src={topNews2} alt="top news"/>
        </CardMedia>
        <CardContent>
        <p className=' bg-red-500 w-[100px] p-2 text-white my-2 rounded-base rounded'>Technology</p>
          <Typography >
          Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
          </Typography>
          <Typography >
          By Awlad Hossain - Mar 18 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      
        </Box>
    );
};

export default SideBar;