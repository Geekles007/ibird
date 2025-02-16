import { fetchData } from '@/helpers';
import { PER_PAGE, REVALIDATE } from '@/lib/constants';
import Gallery from '@/components/home/organisms/gallery';

type GalleryWrapperProps = {};

const { DRIBBBLE_ACCESS_TOKEN } = process.env;

async function getDribbblePosts() {
  try {
    const posts = await fetchData<any[]>(
      `https://api.dribbble.com/v2/user/shots?access_token=${DRIBBBLE_ACCESS_TOKEN}&page=1&per_page=${PER_PAGE}`,
      {
        method: 'GET',
        next: { revalidate: REVALIDATE },
      }
    );

    return { posts };
  } catch (error) {
    console.error('Failed to fetch Dribbble posts:', error);
    return { posts: [] };
  }
}

const GalleryWrapper = async ({}: GalleryWrapperProps) => {
  const { posts } = await getDribbblePosts();

  return (
    <Gallery
      posts={posts}
      className={'absolute left-1/2 top-28 -translate-x-1/2'}
    />
  );
};

export default GalleryWrapper;
