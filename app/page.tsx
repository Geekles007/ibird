import AgencyName from '@/components/shared/atoms/agency-name';
import Socials from '@/components/home/organisms/socials';
import HireUsButton from '@/components/home/molecules/hire-us-button';
import Gallery from '@/components/home/organisms/gallery';

export default function Home() {
  return (
    <main className=''>
      <AgencyName />
      <Socials className={'fixed bottom-8 left-8 gap-8'} />
      <HireUsButton className={'absolute bottom-8 right-8'} />
      <Gallery className={'absolute top-10'} />
    </main>
  );
}
