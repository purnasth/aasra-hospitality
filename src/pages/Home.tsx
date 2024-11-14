import React from 'react';
import About from '../components/About';
import MasterSlider from '../components/ui/MasterSlider';

const slides = [
  {
    title: 'Aasra Hospitality',
    description:
      'Aasra Hospitality is a privately owned, innovative hotel development and hospitality management company. We manage a portfolio of hotels across the United States and provide investor opportunities, hotel development services, hotel management services, and hospitality career opportunities to our partners and associates.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
  },
  {
    title: 'Aasra Hospitality',
    description:
      'Aasra Hospitality is a privately owned, innovative hotel development and hospitality management company. We manage a portfolio of hotels across the United States and provide investor opportunities, hotel development services, hotel management services, and hospitality career opportunities to our partners and associates.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
  },
  {
    title: 'Aasra Hospitality',
    description:
      'Aasra Hospitality is a privately owned, innovative hotel development and hospitality management company. We manage a portfolio of hotels across the United States and provide investor opportunities, hotel development services, hotel management services, and hospitality career opportunities to our partners and associates.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
  },
];

const Home: React.FC = () => {
  return (
    <>
      <main className="relative p-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w"
          alt="Aasra Hospitality"
          className="-z-10 h-[110vh] w-full object-cover object-top"
        />
        <div className="overlay pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-dark/40 to-transparent"></div>
      </main>
      {/* <main className="flex h-screen w-full items-center justify-center flex-col gap-12">
        <h1 className="text-center text-8xl capitalize">Aasra Hospitality</h1>
        <p className="text-center text-base max-w-2xl">
          Aasra Hospitality is a privately owned, innovative hotel development
          and hospitality management company. We manage a portfolio of hotels
          across the United States and provide investor opportunities, hotel
          development services, hotel management services, and hospitality
          career opportunities to our partners and associates.
        </p>
      </main> */}
      <About />

      <hr className="border-dark/20" />

      <main className="bg-light px-0">
        <div className="container mb-16 text-center">
          <span className="text-xl">Aasra means 'King of Fame'</span>
          <p className="mx-auto mt-6 max-w-4xl opacity-50">
            Aasra Hospitality has a vision to be the King of Fame in the
            hospitality industry. We have 100+ hotels across the world and we
            are growing. We have a team of 1000+ employees who are working hard
            to make Aasra Hospitality the best in the world.
          </p>
        </div>

        <MasterSlider slides={slides} hasContent sizeClassName="h-screen w-full object-cover" />
      </main>
    </>
  );
};

export default Home;
