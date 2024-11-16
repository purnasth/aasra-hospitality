import React from 'react';
import About from '../components/About';
import MasterSlider from '../components/ui/MasterSlider';
import GuestBook from '../components/ui/GuestBook';
import Services from '../components/Services';
import Nearby from '../components/ui/Nearby';
import Brands from '../components/Brands';
import Gallery from '../components/ui/Gallery';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Commitment. Reliability. Follow through.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
  },
  {
    title: 'Setting the standard in hospitality management',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941225922-SNJE6B34RVWFT80MHOG3/bed-bedroom-cozy-164595.jpg?format=2500w',
  },
  {
    title: 'Driven by teamwork and innovation',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941521086-DOEJIY920IJFTSONER8R/adult-architect-blueprint-416405.jpg?format=2500w',
  },
];

const Home: React.FC = () => {
  return (
    <>
      <main className="relative p-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w"
          alt="Aasra Hospitality"
          className="-z-10 h-[110vh] w-full object-cover object-top contrast-125"
        />
        <div className="overlay pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-dark/40 to-transparent"></div>
      </main>
      <About />
      <main className="flex w-full flex-col items-center justify-center gap-12 border-t border-dark/20">
        <h1 className="max-w-5xl text-center text-8xl leading-tight">
          Aasra Hospitality leading the Way in the Hospitality Industry
          Worldwide
        </h1>
        <p className="max-w-2xl text-center text-base">
          Founded by "Maninderjit Singh Bath" & "Ajayapal Singh Bath" in 2000.
          Aasra Hospitality is a privately owned, innovative hotel development
          and hospitality management company. We manage a portfolio of hotels
          across the United States and provide investor opportunities, hotel
          development services, hotel management services, and hospitality
          career opportunities to our partners and associates.
        </p>
        <p className="max-w-2xl text-center text-base">
          Headquartered in Redding, CA our corporate staff provides complete
          services in both business development and hotel management. We employ
          over 600 associates at hotels throughout the United States, located in
          popular destinations, including California, Oregon, Washington,
          Alaska, and Utah.
        </p>
      </main>

      <hr className="border-dark/20" />

      <main className="bg-light px-0 pb-0">
        <div className="container mb-16 text-center">
          <span className="text-xl">Aasra means 'King of Fame'</span>
          <p className="mx-auto mt-6 max-w-4xl opacity-50">
            Aasra Hospitality has a vision to be the King of Fame in the
            hospitality industry. We have 100+ hotels across the world and we
            are growing. We have a team of 1000+ employees who are working hard
            to make Aasra Hospitality the best in the world.
          </p>
        </div>

        <MasterSlider
          slides={slides}
          hasContent
          sizeClassName="h-[110vh] w-full object-cover"
          headingClassName="text-white text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl xl:text-8xl lg:leading-snug max-w-5xl mx-auto [text-shadow:_0_1px_10px_#00000080]"
        />
      </main>

      <GuestBook />
      <Services />

      <Brands />

      <main className="px-4">
        <div className="mb-16 space-y-4">
          <span className="uppercase opacity-60">
            Collection of our best memories.
          </span>
          <h3 className="max-w-6xl text-pretty text-6xl leading-tight opacity-80">
            We have a collection of photos of our hotels, events, and our team.
          </h3>
        </div>
        {/* <div className="mb-16 space-y-4 text-center">
          <span className="uppercase opacity-60">Glimpse of Memories</span>
          <h3 className="text-7xl">Aasra's Gallery</h3>
          <p className="max-w-xl text-pretty opacity-80 mx-auto">
            Collection of our best memories. We have a collection of photos of
            our hotels, events, and our team. We are proud of our team and our
            hotels. We are always ready to serve you.
          </p>
        </div> */}
        <Gallery
          galleryClassName="columns-1 sm:columns-2 lg:columns-5 gap-4"
          limit={20}
        />
        <div className="mt-12 flex flex-col items-center justify-center">
          <div className="bottom-0 mx-auto h-10 w-px bg-dark/30 md:h-40"></div>
          <Link
            className="transition-1000 pointer-events-auto inline-flex items-center gap-2 border border-dark/50 px-6 py-2 text-dark shadow backdrop-blur-sm hover:bg-dark/20"
            to="/gallery"
            aria-label="View Full Gallery"
          >
            View Full Gallery
          </Link>
        </div>
      </main>

      <main className="bg-light px-0 pb-0">
        <div className="container mb-16 text-center">
          <span className="text-xl">Reach to Aasra Hospitality</span>
          <p className="mx-auto mt-6 max-w-4xl opacity-50">
            We are available 24/7 to help you. You can reach us by phone, email,
            or by visiting our office. We are located in Redding, CA. We are
            always ready to help you. Get direction to our office by clicking on
            the location below.
          </p>
        </div>
        <Nearby />
      </main>
    </>
  );
};

export default Home;
