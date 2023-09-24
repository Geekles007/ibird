import { HTMLAttributes, memo } from 'react';
import { cn } from '@/helpers';

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  ready: boolean;
};

const Logo = ({ className, ready }: LogoProps) => {
  return (
    <div
      className={cn(
        ` left-1/2 top-1/2 flex h-40 -translate-x-1/2 -translate-y-1/2 gap-2`,
        className
      )}
    >
      <div
        className={`left-1/2 top-5 h-full w-0 -translate-x-1/2 border-b-[50px] border-r-[40px] border-t-[50px] border-b-transparent border-r-black border-t-transparent`}
      />
      <div className='relative flex h-full flex-col justify-between gap-2'>
        <div
          className={`left-1/2 top-5 h-[46.5%] w-0 -translate-x-1/2 border-b-[50px] border-l-[40px] border-t-[50px] border-b-transparent border-l-black border-t-transparent`}
        />
        <div
          className={cn(
            `ease-[cubic-bezier(0.76, 0, 0.24, 1)] absolute top-1/2 h-20 w-0 -translate-x-1/2 -translate-y-1/2 border-b-[50px] border-r-[40px] border-t-[50px] border-b-transparent border-r-primary border-t-transparent transition-all duration-300`,
            ready ? 'left-0' : 'left-36 scale-0'
          )}
        />
        <div
          className={`left-1/2 top-5 h-[46.5%] w-0 -translate-x-1/2 border-b-[50px] border-l-[40px] border-t-[50px] border-b-transparent border-l-black border-t-transparent`}
        />
      </div>
    </div>
  );
};

export default memo(Logo);
