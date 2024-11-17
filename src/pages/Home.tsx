import React from 'react';
import About from '../components/About';
import GuestBook from '../components/ui/GuestBook';
import Services from '../components/Services';
import Nearby from '../components/ui/Nearby';
import Brands from '../components/Brands';
import Gallery from '../components/ui/Gallery';
import { Link } from 'react-router-dom';
// import AboutDetails from '../components/AboutDetails';
import AboutAasra from '../components/AboutAasra';
import MD from '../components/ui/MD';
import NearbyAttractions from '../components/ui/NearbyAttractions';

const Home: React.FC = () => {
  return (
    <>
      <main className="relative p-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w"
          alt="Aasra Hospitality"
          className="-z-10 h-96 w-full object-cover object-top contrast-125 md:h-[110vh]"
        />
        <div className="overlay pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-dark/40 to-transparent"></div>
      </main>
      <About />

      {/* <AboutDetails /> */}

      <hr className="border-dark/20" />

      <AboutAasra />
      <MD />

      <GuestBook />
      <Services />

      <Brands />

      <main className="px-4">
        <div className="mb-8 space-y-4 md:mb-16">
          <span className="text-sm uppercase opacity-60 md:text-base">
            Collection of our best memories.
          </span>
          <h3 className="max-w-6xl text-pretty text-3xl leading-tight opacity-80 md:text-6xl">
            We have a collection of photos of our property, events & our team.
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
        <div className="flex flex-col items-center justify-center">
          <div className="bottom-0 mx-auto h-16 w-px bg-dark/30 md:h-40"></div>
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
        <div className="container mb-8 text-center md:mb-16">
          <span className="text-xl">Reach to Aasra Hospitality</span>
          <p className="mx-auto mt-6 max-w-4xl text-justify text-sm opacity-50 md:text-center md:text-base">
            We are available 24/7 to help you. You can reach us by phone, email,
            or by visiting our office. We are located in Redding, CA. We are
            always ready to help you. Get direction to our office by clicking on
            the location below.
          </p>
        </div>
        <Nearby />
        <div className="flex flex-col items-center justify-center">
          <div className="bottom-0 mx-auto h-16 w-px bg-dark/30 md:h-40"></div>
          <Link
            className="transition-1000 pointer-events-auto inline-flex items-center gap-2 border border-dark/50 px-6 py-2 text-dark shadow backdrop-blur-sm hover:bg-dark/20"
            to="/nearby-attractions"
            aria-label="Explore the beauty of California near Aasra Hospitality"
          >
            Explore the beauty of California near Aasra Hospitality
          </Link>
        </div>
        {/* <h3 className="mb-0 mt-12 text-center text-8xl">Nearby Attractions</h3> */}
        <main className="bg-light pt-16">
          <NearbyAttractions limit={2} />
        </main>
      </main>
    </>
  );
};

export default Home;
