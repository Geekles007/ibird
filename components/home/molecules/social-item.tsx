'use client';

import React, { useEffect, useState } from 'react';
import Link, { LinkProps } from 'next/link';
import Magnetic from '@/components/shared/atoms/magnetic';
import { cn } from '@/helpers';
import Icon from '@/components/shared/atoms/icon';

type SocialItemProps = LinkProps & {
  name: string;
  size: number;
  bgColor?: string;
};

const SocialItem = ({
  size,
  name,
  bgColor = 'bg-black',
  ...props
}: SocialItemProps) => {
  const [color, setColor] = useState('#000');

  const onHover = () => {
    setColor('#000');
  };

  const onLeave = () => {
    setColor('#000');
  };

  useEffect(() => {
    console.log(color);
  }, [color]);

  return (
    <Magnetic
      className={cn(
        `group relative flex h-10 w-10 items-center justify-center before:absolute 
          before:block before:h-12 before:w-12 before:scale-0 before:rounded-full before:transition-all before:duration-300 hover:before:scale-100`,
        `before:bg-primary`
      )}
    >
      <Link
        {...props}
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
