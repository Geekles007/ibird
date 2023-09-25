'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

type CustomCursorProps = {};

const CustomCursor = ({}: CustomCursorProps) => {
  const cursor = useRef<HTMLDivElement>(null);
  const cursorText = useRef<HTMLDivElement>(null);
  const cursorFollower = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let posX = 0,
      posY = 0;

    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;

      posX += (clientX - posX) / 3;
      posY += (clientY - posY) / 3;

      gsap.to(cursor.current, {
        left: posX,
        top: posY,
      });
      gsap.to(cursorFollower.current, {
        left: clientX - 20,
        top: clientY - 20,
      });
      gsap.to(cursorText.current, {
        left: clientX - 10,
        top: clientY - 5,
      });
    });

    document.addEventListener('mouseleave', () => {
      gsap.to([cursor.current, cursorFollower.current, cursorText.current], {
        opacity: 0,
      });
    });

    document.addEventListener('mouseenter', () => {
      gsap.to([cursor.current, cursorFollower.current], {
        opacity: 1,
      });
    });

    document.addEventListener('mouseover', (e) => {
      const type = e.target?.getAttribute?.('data-type');
      if (type === 'link' && !cursor.current?.classList.contains('active')) {
        cursor.current?.classList.add('active');
        cursorFollower.current?.classList.add('active');
        gsap.to(cursorText.current, {
          opacity: 1,
        });

        e.target?.addEventListener('mouseleave', (e) => {
          const type = e.target?.getAttribute?.('data-type');
          if (type === 'link' && cursor.current?.classList.contains('active')) {
            cursor.current?.classList.remove('active');
            cursorFollower.current?.classList.remove('active');
            gsap.to(cursorText.current, {
              opacity: 0,
            });
          }
        });
      }
    });
  }, []);

  return (
    <>
      <div ref={cursor} className='cursor'></div>
      <div ref={cursorFollower} className='cursor-follower' />
      <div
        ref={cursorText}
        className={
          'pointer-events-none absolute z-[999] select-none text-sm text-white opacity-0'
        }
      >
        View
      </div>
    </>
  );
};

export default CustomCursor;
