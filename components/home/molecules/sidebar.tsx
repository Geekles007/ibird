'use client';

import React, { HTMLAttributes } from 'react';
import { cn } from '@/helpers';
import { motion } from 'framer-motion';

type SidebarProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
};

const sideAnimation = {
  initial: { x: '100%', opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
  },
  close: {
    x: '100%',
    opacity: 0,
  },
};

const trapAnimation = {
  initial: { x: '100%', opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
  },
  close: {
    x: '100%',
    opacity: 0,
  },
};

const Sidebar = ({ children, className, open, ...props }: SidebarProps) => {
  return (
    <div
      className={cn(
        `fixed inset-0 right-0 z-[100] h-full w-full overflow-hidden bg-transparent transition-all duration-300`,
        open ? 'translate-x-0' : '-translate-x-full',
        className
      )}
      {...props}
    >
      <motion.div
        variants={sideAnimation}
        initial={'initial'}
        animate={open ? 'open' : 'close'}
        transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
          ease: [0.61, 1, 0.88, 1],
        }}
        className='absolute inset-0 bg-black/[.2]'
      ></motion.div>
      <motion.div
        variants={trapAnimation}
        initial={'initial'}
        animate={open ? 'open' : 'close'}
        transition={{
          delay: 0.5,
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
          ease: [0.61, 1, 0.88, 1],
        }}
        className='absolute flex h-full w-full justify-end'
      >
        <div className='trapeze h-full w-8/12 bg-primary'></div>
      </motion.div>
      <motion.div
        variants={sideAnimation}
        initial={'initial'}
        animate={open ? 'open' : 'close'}
        transition={{ delay: 0.8 }}
        className='flex h-full flex-col items-end justify-center gap-6 pr-8'
      >
        <h3 className={'text-4xl'}>Cameroon, Bonamoussadi</h3>
        <h3 className={'text-4xl'}>Tondjilee@gmail.com</h3>
      </motion.div>
    </div>
  );
};

export default Sidebar;
