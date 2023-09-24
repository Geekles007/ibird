'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type LoaderProps = {};

const animationText = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const logoAnimation = {
  initial: { opacity: 0, scale: 0 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0.4,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const containerAnimation = {
  initial: { height: '100vh' },
  enter: {
    height: '100vh',
    transition: {
      duration: 0.5,
      ease: [0.7, 0, 0.84, 0],
    },
  },
  closed: {
    height: '17vh',
    transition: {
      delay: 1.2,
      duration: 0.8,
      ease: [0.37, 0, 0.63, 1],
    },
  },
};

const overlayAnimation = {
  initial: { y: 0 },
  enter: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    y: '-100%',
    transition: {
      delay: 1.8,
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Loader = ({}: LoaderProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  return (
    <motion.div
      variants={containerAnimation}
      initial={'initial'}
      animate={ready ? 'closed' : 'enter'}
      className={`pointer-events-none absolute inset-0 z-50 flex h-screen w-full flex-col 
        items-center justify-center gap-2 overflow-hidden border border-black`}
    >
      <motion.div
        variants={overlayAnimation}
        initial={'initial'}
        animate={ready ? 'closed' : 'enter'}
        className='absolute inset-0 -z-10 bg-white'
      ></motion.div>
      <motion.div
        variants={logoAnimation}
        initial={'initial'}
        animate={ready ? 'closed' : 'enter'}
      >
        <Image
          src={'/logo.svg'}
          width={50}
          height={50}
          alt={'Ibird logo'}
          className={'logo z-10'}
        />
      </motion.div>
      <motion.span
        variants={animationText}
        initial={'initial'}
        animate={ready ? 'closed' : 'enter'}
        className={'texting z-10 text-5xl font-bold'}
      >
        iBIRD DESIGN AGENCY
      </motion.span>
      <motion.p
        variants={animationText}
        initial={'initial'}
        animate={ready ? 'closed' : 'enter'}
        className={'texting z-10 text-xl font-light'}
      >
        Let us make it great and amaze you !
      </motion.p>
    </motion.div>
  );
};

export default Loader;
