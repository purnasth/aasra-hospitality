import React from 'react';
import NearbyAttractions from '../components/ui/NearbyAttractions';

const NearbyPage: React.FC = () => {
  return (
    <>
      <main>
        <div className="mb-24 space-y-4 text-center">
          <span className="uppercase opacity-60">
            Welcome to Aasra Hospitality
          </span>
          <h1 className="text-8xl">Nearby Attractions</h1>
          <p className="mx-auto max-w-xl text-pretty opacity-80">
            Explore the beauty of California and its surroundings nearby Aasra
            Hospitality. From scenic trails to historic sites, there's something
            for everyone to enjoy.
          </p>
        </div>

        <NearbyAttractions />
      </main>
    </>
  );
};

export default NearbyPage;
