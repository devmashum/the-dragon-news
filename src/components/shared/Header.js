import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import header from '@/assets/The Dragon News.png'
import getCurrentDate from '@/utils/getDate';
import Link from 'next/link';

const Header = () => {
    const currentDateInfo = getCurrentDate();
    return (
        <Box>
         <Link href={'/'}>   
         <Container>
               <Image className='w-6/12 mx-auto py-5' width={500} height={500} src={header} alt='The Dragon News'/>
               <Typography textAlign={'center'}>Journalism Without Fear or Favour</Typography>
               <Typography variant='body2' color="gray" textAlign={"center"} className='mb-3'>{currentDateInfo}</Typography>
            </Container>
            </Link>
        </Box>
    );
};

export default Header;