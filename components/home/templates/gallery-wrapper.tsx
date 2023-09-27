import { fetchData } from '@/helpers';
import { PER_PAGE, REVALIDATE } from '@/lib/constants';
import Gallery from '@/components/home/organisms/gallery';

type GalleryWrapperProps = {};

const DRIBBBLE_ACCESS_TOKEN =
  '93d8b16917dc736dcf02290f7584af65edcf924338109c4adb6ceb7ecd192265';

async function getDribbblePosts() {
  const posts: any[] = await fetchData(
    `https://api.dribbble.com/v2/user/shots?access_token=${DRIBBBLE_ACCESS_TOKEN}&page=${1}&per_page=${PER_PAGE}`,
    {
      method: 'GET',
      cache: 'no-cache',
      next: {
        revalidate: REVALIDATE,
      },
    }
  );

  return { posts };
}

const GalleryWrapper = async ({}: GalleryWrapperProps) => {
  const { posts } = await getDribbblePosts();

  return (
    <>
      <Gallery
        posts={posts}
        className={'absolute left-1/2 top-28 -translate-x-1/2'}
      />
    </>
  );
};

export default GalleryWrapper;
