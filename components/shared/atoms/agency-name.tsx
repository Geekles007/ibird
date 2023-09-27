'use client';

import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type AgencyNameProps = {};

const AgencyName = ({}: AgencyNameProps) => {
  const firstTextRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const secondTextRef = useRef<HTMLDivElement>(null);
  const directionRef = useRef<number>(-1);
  const xPercentRef = useRef<number>(0);

  const animation = useCallback(() => {
    if (xPercentRef.current <= -100) {
      xPercentRef.current = 0;
    }
    if (xPercentRef.current > 0) {
      xPercentRef.current = -100;
    }
    gsap.set(firstTextRef.current, { xPercent: xPercentRef.current });
    gsap.set(secondTextRef.current, { xPercent: xPercentRef.current });
    if (directionRef.current !== null) {
      xPercentRef.current += 0.1 * directionRef.current;
    }
    requestAnimationFrame(animation);
  }, []);

  useEffect(() => {
    const body = document.body,
      html = document.documentElement;

    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: height,
        onUpdate: (e) => (directionRef.current = e.direction * -1),
      },
      x: '-500px',
    });
    requestAnimationFrame(animation);
  }, [animation]);

  return (
    <div className='fixed left-0 top-1/2 -translate-y-1/2'>
      <div
        ref={sliderRef}
        className='slider relative flex gap-2 whitespace-nowrap'
      >
        <p ref={firstTextRef}>iBIRD DESIGN AGENCY -</p>
        <p ref={secondTextRef} className={'absolute left-full'}>
          iBIRD DESIGN AGENCY -
        </p>
      </div>
    </div>
  );
};

export default AgencyName;
