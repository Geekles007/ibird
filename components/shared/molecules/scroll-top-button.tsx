'use client';

import React, { memo, useEffect, useState } from 'react';
import { ChevronUpIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type ScrollTopButtonProps = {};

const buttonAnimation = {
  initial: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
  },
  hide: {
    opacity: 0,
    scale: 0,
  },
};

const ScrollTopButton = ({}: ScrollTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <motion.button
      variants={buttonAnimation}
      data-type={'link'}
      data-text={`<div class="absolute -left-4 text-sm whitespace-nowrap">
          Scroll top
        </div>`}
      initial={'initial'}
      animate={isVisible ? 'show' : 'hide'}
      className={
        'z-700 fixed bottom-12 left-8 flex h-12 w-12 items-center justify-center rounded-full border-0 bg-primary p-0.5 text-black hover:bg-primary sm:left-1/2 sm:-translate-x-1/2'
      }
      onClick={scrollToTop}
    >
      <ChevronUpIcon />
    </motion.button>
  );
};

export default memo(ScrollTopButton);
