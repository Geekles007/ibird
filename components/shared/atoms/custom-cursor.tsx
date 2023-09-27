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
        left: clientX - 15,
        top: clientY - 15,
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
      const type = (e.target as HTMLElement)?.getAttribute?.('data-type');
      const hoverText = (e.target as HTMLElement)?.getAttribute?.('data-text');
      if (type === 'link' && !cursor.current?.classList.contains('active')) {
        cursor.current?.classList.add('active');
        cursorFollower.current?.classList.add('active');
        if (cursorText.current && hoverText) {
          cursorText.current.innerHTML = hoverText;
        } else if (cursorText.current) {
          cursorText.current.innerText = 'View';
        }
        gsap.to(cursorText.current, {
          opacity: 1,
        });

        e.target?.addEventListener('mouseleave', (e) => {
          const type = (e.target as HTMLElement)?.getAttribute?.('data-type');
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
      <div ref={cursor} className='cursor hidden sm:block'></div>
      <div ref={cursorFollower} className='cursor-follower hidden sm:block' />
      <div
        ref={cursorText}
        className={
          'pointer-events-none fixed z-[999] hidden select-none text-lg text-white opacity-0 sm:block'
        }
      >
        View
      </div>
    </>
  );
};

export default CustomCursor;
