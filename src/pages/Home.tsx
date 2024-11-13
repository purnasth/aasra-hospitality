import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <main className="relative p-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w"
          alt="Aasra Hospitality"
          className="-z-10 h-screen w-full object-cover"
        />
        <div className="overlay pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-dark/40 to-transparent"></div>
      </main>
      <main className="flex h-screen w-full items-center justify-center">
        <h1 className="text-center text-5xl capitalize">Aasra Hospitality</h1>
        <p className="text-center text-xl">
          Aasra Hospitality is a privately owned, innovative hotel development
          and hospitality management company. We manage a portfolio of hotels
          across the United States and provide investor opportunities, hotel
          development services, hotel management services, and hospitality
          career opportunities to our partners and associates.
        </p>
      </main>
    </>
  );
};

export default Home;
