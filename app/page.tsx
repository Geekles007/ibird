import AgencyName from '@/components/shared/atoms/agency-name';
import Socials from '@/components/home/organisms/socials';
import HireUsButton from '@/components/home/molecules/hire-us-button';
import Gallery from '@/components/home/organisms/gallery';
import { fetchData } from '@/helpers';
import { PER_PAGE, REVALIDATE } from '@/lib/constants';

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
      <Socials className={'fixed bottom-8 left-8 z-[99] gap-8'} />
      <HireUsButton className={'fixed bottom-8 right-8 z-[99]'} />
      <Gallery
        posts={posts}
        className={'absolute left-1/2 top-28 -translate-x-1/2'}
      />
    </main>
  );
}
