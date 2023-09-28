'use client';

import React, { HTMLAttributes } from 'react';
import { cn } from '@/helpers';
import { motion } from 'framer-motion';
import Socials from '@/components/home/organisms/socials';

type SidebarProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

const Sidebar = ({
  children,
  className,
  open,
  setOpen,
  ...props
}: SidebarProps) => {
  return (
    <div
      className={cn(
        `fixed inset-0 right-0 z-[100] h-full w-full overflow-hidden bg-transparent backdrop-blur-lg transition-all duration-300`,
        open ? 'translate-x-0' : '-translate-x-full',
        className
      )}
      {...props}
    >
      <motion.div
        variants={sideAnimation}
        initial={'initial'}
        onClick={() => setOpen((old) => !old)}
        animate={open ? 'open' : 'close'}
        transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
          ease: [0.61, 1, 0.88, 1],
        }}
        className='absolute inset-0 bg-white/[.2]'
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
        className='flex h-full flex-col items-end justify-center gap-6 text-center xs:pr-8'
      >
        <h3 className={'text-xl max-xs:w-full max-xs:text-center sm:text-4xl'}>
          Belgium, Brussels
        </h3>
        <a
          href={'mailto:ibirdagency@gmail.com'}
          data-type={'link'}
          data-text={`<div class='absolute -left-4'>Contact</div>`}
          className={`relative text-2xl before:absolute before:left-0 before:top-1/2 before:z-10 before:block before:h-1 
            before:w-0 before:-translate-y-1/2 before:bg-primary before:transition-all before:duration-500 
            hover:before:w-full max-xs:w-full max-xs:text-center sm:text-4xl`}
        >
          ibirdagency@gmail.com
        </a>
        <Socials className={'fixed bottom-8 left-8 z-[99] flex md:hidden'} />
      </motion.div>
    </div>
  );
};

export default Sidebar;
