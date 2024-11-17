import React from 'react';

const AboutDetails: React.FC = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center gap-6 border-t border-dark/20 md:gap-12">
        <h1 className="max-w-5xl text-4xl leading-snug md:text-center md:text-8xl md:leading-tight">
          Aasra Hospitality leading the Way in the Hospitality Industry
          Worldwide
        </h1>
        <p className="max-w-2xl text-justify text-base md:text-center">
          Founded by "Maninderjit Singh Bath" & "Ajayapal Singh Bath" in 2000.
          Aasra Hospitality is a privately owned, innovative hotel development
          and hospitality management company. We manage a portfolio of hotels
          across the United States and provide investor opportunities, hotel
          development services, hotel management services, and hospitality
          career opportunities to our partners and associates.
        </p>
        <p className="max-w-2xl text-justify text-base md:text-center">
          Headquartered in Redding, CA our corporate staff provides complete
          services in both business development and hotel management. We employ
          over 600 associates at hotels throughout the United States, located in
          popular destinations, including California, Oregon, Washington,
          Alaska, and Utah.
        </p>
      </main>
    </>
  );
};

export default AboutDetails;
