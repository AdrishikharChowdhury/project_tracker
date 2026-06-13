import AboutUS from '@/components/about-us/AboutUS';
import Banner from '@/components/banner/Banner';
import ContactUs from '@/components/contact/ContactUs';
import Reviews  from '@/components/reviews/Reviews';

const page = () => {
  return (
    <main className="w-full">
      <Banner />
      <AboutUS />
      <Reviews />
      <ContactUs />
    </main>
  )
}

export default page
