import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import header from '@/assets/The Dragon News.png'
import getCurrentDate from '@/utils/getDate';

const Header = () => {
    const currentDateInfo = getCurrentDate();
    return (
        <Box>
            <Container>
               <Image className='w-6/12 mx-auto py-5' width={500} height={500} src={header} alt='The Dragon News'/>
               <Typography textAlign={'center'}>Journalism Without Fear or Favour</Typography>
               <Typography variant='body2' color="gray" textAlign={"center"} className='mb-3'>{currentDateInfo}</Typography>


            </Container>
        </Box>
    );
};

export default Header;