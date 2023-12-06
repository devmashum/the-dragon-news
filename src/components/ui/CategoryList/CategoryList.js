import { getAllCategories } from '@/utils/getAllCategories';
import { Box, Button, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const CategoryList = async () => {
    const {data: allCategories} = await getAllCategories();
console.log(allCategories);
    return (
        <Box className="mt-5 bg-gray-100 px-5 py-2 ">
         <Typography  variant='h6'>Category</Typography>
         <Stack sx={{mt: 2.5}} rowGap={1}>
            {allCategories.map((category)=>(<Button variant='outlined' key={category.id}>
            <Link href={category.title}>{category.title}</Link>
            </Button>))}
         </Stack>
        </Box>
    );
};

export default CategoryList;