import React, { HTMLAttributes } from 'react';

type CardImageProps = HTMLAttributes<HTMLDivElement> & {};

const CardImage = ({ children, className, ...props }: CardImageProps) => {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
};

export default CardImage;
