import React, { AnchorHTMLAttributes } from 'react';
import Magnetic from '@/components/shared/atoms/magnetic';
import { cn } from '@/helpers';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { DEFAULT_COLOR } from '@/lib/constants';

type HireUsButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  open: boolean;
};

const buttonAnimation = {
  initial: { backgroundColor: DEFAULT_COLOR, width: 144, height: 144 },
  open: {
    backgroundColor: 'red',
    height: 80,
    width: 80,
  },
  close: {
    backgroundColor: DEFAULT_COLOR,
    width: 144,
    height: 144,
  },
};

const HireUsButton = ({ className, open, onClick }: HireUsButtonProps) => {
  return (
    <Magnetic className={cn(`h-36 w-36`, className)}>
      <motion.a
        variants={buttonAnimation}
        initial={'initial'}
        animate={open ? 'open' : 'close'}
        className={`flex h-full w-full items-center justify-center rounded-full bg-primary text-black`}
        onClick={onClick}
      >
        {open ? <X size={25} /> : 'Get In Touch'}
      </motion.a>
    </Magnetic>
  );
};

export default HireUsButton;
