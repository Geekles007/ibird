'use client';

import React, { AnchorHTMLAttributes, useState } from 'react';
import Link from 'next/link';
import Magnetic from '@/components/shared/atoms/magnetic';
import { cn } from '@/helpers';
import Icon from '@/components/shared/atoms/icon';

type SocialItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  name: string;
  size: number;
  bgColor?: string;
};

const SocialItem = ({ size, name, target, href }: SocialItemProps) => {
  const [color, setColor] = useState('#000');

  const onHover = () => {
    setColor('#000');
  };

  const onLeave = () => {
    setColor('#000');
  };

  return (
    <Magnetic
      className={cn(
        `group relative flex h-10 w-10 items-center justify-center before:absolute 
          before:block before:h-12 before:w-12 before:scale-0 before:rounded-full before:transition-all before:duration-300 hover:before:scale-100`,
        `before:bg-primary`
      )}
    >
      <Link
        href={href ?? '/'}
        target={target}
        onMouseOver={onHover}
        onMouseLeave={onLeave}
        className={'z-50 text-white'}
      >
        <Icon color={color} size={size} name={name} />
      </Link>
    </Magnetic>
  );
};

export default SocialItem;
