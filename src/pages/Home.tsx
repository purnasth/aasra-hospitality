import React from 'react';
import About from '../components/About';
import MasterSlider from '../components/ui/MasterSlider';
import GuestBook from '../components/ui/GuestBook';

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
      <About />
      <main className="flex w-full flex-col items-center justify-center gap-12 border-t border-dark/20">
        <h1 className="text-center text-8xl max-w-5xl leading-tight">
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
          sizeClassName="h-screen w-full object-cover"
        />
      </main>

      <GuestBook />
    </>
  );
};

export default Home;
