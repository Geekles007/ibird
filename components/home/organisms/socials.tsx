import React, { HTMLAttributes } from 'react';
import { cn } from '@/helpers';
import SocialItem from '@/components/home/molecules/social-item';

type SocialsProps = HTMLAttributes<HTMLDivElement> & {};

const Socials = ({ children, className, ...props }: SocialsProps) => {
  return (
    <div className={cn(`flex items-center gap-4`, className)} {...props}>
      <SocialItem
        href={'https://www.linkedin.com/company/64646551'}
        bgColor={'blue'}
        target={'_blank'}
        name={'Linkedin'}
        size={30}
      />
      <SocialItem
        href={'https://www.instagram.com/ibird.design/'}
        bgColor={'orange'}
        target={'_blank'}
        name={'Instagram'}
        size={30}
      />
      <SocialItem
        href={'https://dribbble.com/ibirddesign'}
        bgColor={'yellow'}
        target={'_blank'}
        name={'Dribbble'}
        size={30}
      />
    </div>
  );
};

export default Socials;
