import React, { HTMLAttributes } from 'react';
import { fetchData } from '@/helpers';
import { PER_PAGE, REVALIDATE } from '@/lib/constants';

const { DRIBBBLE_ACCESS_TOKEN } = process.env;

async function getDribbblePosts() {
  const posts = await fetchData(
    `https://api.dribbble.com/v2/user/shots?access_token=${DRIBBBLE_ACCESS_TOKEN}&page=${1}&per_page=${PER_PAGE}`,
    {
      method: 'GET',
      cache: 'force-cache',
      next: {
        revalidate: REVALIDATE,
      },
    }
  );

  return { posts };
}

type GalleryProps = HTMLAttributes<HTMLDivElement> & {};

const Gallery = async ({ children, className, ...props }: GalleryProps) => {
  const { posts } = await getDribbblePosts();

  console.log(posts);

  return <div className={`${className} flex flex-col`} {...props}></div>;
};

export default Gallery;
