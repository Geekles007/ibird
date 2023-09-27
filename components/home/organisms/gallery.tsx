'use client';

import React, { HTMLAttributes, useEffect, useState } from 'react';
import { cn } from '@/helpers';
import { motion } from 'framer-motion';
import CardImage from '@/components/home/molecules/card-image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const galleryAnimation = {
  initial: { y: 300, x: '-50%', left: '50%', opacity: 0 },
  enter: {
    y: 0,
    x: '-50%',
    left: '50%',
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 0.5,
      ease: [0.68, 0.57, 0.53, 0.66],
    },
  },
  closed: {
    y: 300,
    opacity: 0,
    x: '-50%',
    left: '50%',
    transition: {
      duration: 0.5,
      ease: [0.68, 0.57, 0.53, 0.66],
    },
  },
};

type GalleryProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'> & {
  posts: any[];
};

const Gallery = ({ className, posts }: GalleryProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (posts?.length > 0) {
      setReady(true);
    }
  }, [posts]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const items = gsap.utils.toArray('.card');
    items.forEach((item: any) => {
      const overlay = item?.querySelector('._overlay');
      const img = item?.querySelector('._image');
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 70%',
          toggleActions: 'play none none none',
          // markers: true,
        },
      });
      tl.to(overlay, 0.5, {
        width: 0,
        ease: 'expo.out',
      });
      tl.to(img, 0.5, {
        scale: 1,
        filter: 'blur(0px)',
        ease: 'cubic-bezier(.56,.65,.5,.78)',
      });
    });
  }, []);

  return (
    <motion.div
      variants={galleryAnimation}
      initial={'initial'}
      animate={ready ? 'enter' : 'closed'}
      className={cn(
        `list absolute flex w-11/12 max-w-screen-xl gap-y-[150px] pb-[170px]
         max-md:flex-col md:flex-wrap md:justify-between`,
        className
      )}
    >
      {posts?.map((item, index) => {
        return (
          <CardImage
            className={'card'}
            item={item}
            key={`${item?.title}-${index}`}
          />
        );
      })}
    </motion.div>
  );
};

export default Gallery;
