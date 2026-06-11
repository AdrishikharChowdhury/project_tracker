import AboutUS from '@/components/about-us/AboutUS';
import Banner from '@/components/Banner';
import Reviews from '@/components/Reviews';

const page = () => {
  return (
    <main className="w-full">
      <Banner />
      <AboutUS />
      <Reviews />
    </main>
  )
}

export default page
