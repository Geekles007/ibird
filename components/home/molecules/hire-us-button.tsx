import React, { AnchorHTMLAttributes } from 'react';
import Magnetic from '@/components/shared/atoms/magnetic';
import { cn } from '@/helpers';

type HireUsButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {};

const HireUsButton = ({ children, className, ...props }: HireUsButtonProps) => {
  return (
    <Magnetic className={cn(`h-36 w-36`, className)}>
      <a
        className={`flex h-full w-full items-center justify-center rounded-full bg-primary text-black`}
        href={`mailto:tondjilee@gmail.com`}
        {...props}
      >
        Get In Touch
      </a>
    </Magnetic>
  );
};

export default HireUsButton;
