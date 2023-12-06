import { getSingleNews } from '@/utils/getSingleNews';
import React from 'react';

const NewsDetailsPage = async ({params}) => {
    const {data} = await getSingleNews(params.newsId);
    return (
        <div className='mt-5 text-black'>
            {params.newsId}
        </div>
    );
};

export default NewsDetailsPage;