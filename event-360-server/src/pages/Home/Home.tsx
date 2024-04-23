import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import EventItems from "./components/EventItems";
import Faq from "./components/Faq";
import { Footer } from "./components/Footer";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import PricingPlans from "./components/PricingPlans";
import RecentEvent from "./components/RecentEvent";
import Testimonial from "./components/Testimonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Clients />
      <OurServices />
      <EventItems />
      <PricingPlans />
      <Gallery />
      <Testimonial />
      <RecentEvent />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
