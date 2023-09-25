'use client';

import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { cn } from '@/helpers';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

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
  const overlayRef = useRef(null);
  const imgRef = useRef(null);

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
      console.log(overlay);
    });
  }, []);

  return (
    <motion.div
      variants={galleryAnimation}
      initial={'initial'}
      animate={ready ? 'enter' : 'closed'}
      className={cn(
        `list absolute flex w-11/12 max-w-screen-xl flex-wrap justify-between gap-y-[150px] pb-[170px]`,
        className
      )}
    >
      {posts?.map((item, index) => {
        return (
          <div className={'card relative flex'} key={`${item?.title}-${index}`}>
            <strong
              className={
                'absolute -left-12 bg-gray-800 px-2 py-4 text-2xl text-white'
              }
            >
              {item?.title}
            </strong>
            <div className={cn(`h-[550px] w-[500px] overflow-hidden`)}>
              <Link
                href={'/'}
                data-type={'link'}
                target={'_blank'}
                className={cn(
                  'relative flex h-full w-full items-center justify-center bg-gray-50'
                )}
              >
                <div
                  ref={overlayRef}
                  className='_overlay absolute left-0 z-10 h-full w-full overflow-hidden bg-gray-800'
                />
                <Image
                  src={`${item.images.hidpi}`}
                  ref={imgRef}
                  className={
                    '_image pointer-events-none object-contain object-center'
                  }
                  height={400}
                  width={400}
                  alt={item?.title}
                />
              </Link>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Gallery;
