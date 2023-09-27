'use client';

import React, { HTMLAttributes } from 'react';
import { cn } from '@/helpers';
import Link from 'next/link';
import Image from 'next/image';

type CardImageProps = Pick<HTMLAttributes<HTMLDivElement>, 'className'> & {
  item: any;
};

const CardImage = ({ className, item }: CardImageProps) => {
  return (
    <div
      className={cn(
        'relative flex h-auto max-xl:w-2/5 max-md:w-full',
        className
      )}
    >
      <strong
        className={
          'absolute z-10 bg-gray-800 px-2 py-4 text-2xl text-white max-lg:top-0 lg:-left-12'
        }
      >
        {item?.title}
      </strong>
      <div
        className={cn(
          `h-[450px] overflow-hidden max-xl:flex-1 sm:h-[550px] xl:w-[500px]`
        )}
      >
        <Link
          href={item?.html_url}
          data-type={'link'}
          target={'_blank'}
          className={cn(
            'relative flex h-full w-full flex-col items-center justify-center bg-gray-50'
          )}
        >
          <div className='_overlay absolute left-0 z-10 h-full w-full overflow-hidden bg-gray-800' />
          <Image
            src={`${item.images.hidpi}`}
            className={
              '_image pointer-events-none h-auto w-auto object-contain object-center'
            }
            height={400}
            width={400}
            alt={item?.title}
          />
        </Link>
      </div>
    </div>
  );
};

export default CardImage;
