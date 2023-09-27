import { fetchData } from '@/helpers';
import { PER_PAGE, REVALIDATE } from '@/lib/constants';
import dynamic from 'next/dynamic';

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
const Gallery = dynamic(() => import('@/components/home/organisms/gallery'));

const { DRIBBBLE_ACCESS_TOKEN } = process.env;

async function getDribbblePosts() {
  const posts: any[] = await fetchData(
    `https://api.dribbble.com/v2/user/shots?access_token=${DRIBBBLE_ACCESS_TOKEN}&page=${1}&per_page=${PER_PAGE}`,
    {
      method: 'GET',
      cache: 'force-cache',
      next: {
        revalidate: REVALIDATE,
      },
    }
  );

  return { posts };
}

export default async function Home() {
  const { posts } = await getDribbblePosts();

  return (
    <main className=''>
      <AgencyName />
      <Socials
        className={'fixed bottom-8 left-8 z-[99] hidden gap-8 md:flex'}
      />
      <ContactUs />
      <Gallery
        posts={posts}
        className={'absolute left-1/2 top-28 -translate-x-1/2'}
      />
      <ScrollTopButton />
    </main>
  );
}
