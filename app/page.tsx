'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className=''>
      <Link
        data-type={'link'}
        data-cursor-text={'Home'}
        className={'z-10 h-screen w-screen bg-primary'}
        href={'/'}
      >
        Ibird design
      </Link>
    </main>
  );
}
