import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ContactUs = dynamic(
  () => import('@/components/home/organisms/contact-us')
);
const ScrollTopButton = dynamic(
  () => import('@/components/shared/molecules/scroll-top-button')
);
const AgencyName = dynamic(
  () => import('@/components/shared/atoms/agency-name')
);
const Socials = dynamic(() => import('@/components/home/organisms/socials'));
const GalleryWrapper = dynamic(
  () => import('@/components/home/templates/gallery-wrapper')
);

export default async function Home() {
  return (
    <main className=''>
      <AgencyName />
      <Socials
        className={'fixed bottom-8 left-8 z-[99] hidden gap-8 md:flex'}
      />
      <ContactUs />
      <Suspense fallback={<>Loading</>}>
        <GalleryWrapper />
      </Suspense>
      <ScrollTopButton />
    </main>
  );
}
