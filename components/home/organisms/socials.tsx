import React, { HTMLAttributes } from 'react';
import { cn } from '@/helpers';
import SocialItem from '@/components/home/molecules/social-item';

type SocialsProps = HTMLAttributes<HTMLDivElement> & {};

const Socials = ({ children, className, ...props }: SocialsProps) => {
  return (
    <div className={cn(`flex items-center gap-4`, className)} {...props}>
      <SocialItem href={'/'} bgColor={'blue'} name={'Linkedin'} size={30} />
      <SocialItem href={'/'} bgColor={'orange'} name={'Instagram'} size={30} />
      <SocialItem href={'/'} bgColor={'yellow'} name={'Dribbble'} size={30} />
    </div>
  );
};

export default Socials;
