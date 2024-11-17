import React, { useState, useEffect } from 'react';

interface Location {
  name: string;
  distance: string;
  map: string;
}

const nearbyLocations: Location[] = [
  {
    name: 'Redding Municipal Airport (RDD)',
    distance: '12 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48508.579718946!2d-122.3723873000969!3d40.546311705455416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x54d2ea9892190b9d%3A0x4c1432a6197156d0!2sRDD%20-%20Redding%20Muni%20Airport%2C%20Woodrum%20Circle%2C%20Redding%2C%20CA%2C%20USA!3m2!1d40.505818399999995!2d-122.2996775!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731852192846!5m2!1sen!2snp',
  },
  {
    name: 'Shasta College, Redding',
    distance: '15 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48471.190657547486!2d-122.39670054948954!3d40.597907053129525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x54d2926a7da522e1%3A0xc8c76b373cbb0958!2sShasta%20College%2C%2011555%20Old%20Oregon%20Trail%2C%20Redding%2C%20CA%2096003%2C%20United%20States!3m2!1d40.6255781!2d-122.31809559999999!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731852299832!5m2!1sen!2snp',
  },
  {
    name: 'Sundial Bridge, Redding',
    distance: '5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d12120.747929649606!2d-122.37796573698616!3d40.58162793937071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x54d2ed28c047d8dd%3A0xe274bc16e743c26a!2sSundial%20Bridge%2C%20Sacramento%20River%20Trail%2C%20Redding%2C%20CA%2C%20USA!3m2!1d40.5922306!2d-122.3774861!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731852339219!5m2!1sen!2snp',
  },
  {
    name: 'Win-River Resort & Casino, Redding',
    distance: '10 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48512.208056202806!2d-122.40942910015583!3d40.541301860534645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x54d2e9876100ba11%3A0x83d84cd8874fe1be!2sWin-River%20Resort%20%26%20Casino%2C%20Redding%20Rancheria%20Road%2C%20Redding%2C%20CA%2C%20USA!3m2!1d40.5072518!2d-122.38277169999999!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731852381812!5m2!1sen!2snp',
  },
  {
    name: 'Whiskeytown National Recreation Area',
    distance: '18 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d96949.32175145455!2d-122.52673278355208!3d40.59312057973832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x54d2f1028da30b79%3A0x9fdaecb430b4bace!2sWhiskeytown%20National%20Recreation%20Area%2C%20Whiskeytown%2C%20CA%2C%20USA!3m2!1d40.6106256!2d-122.52803689999999!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731852412237!5m2!1sen!2snp',
  },
];

const Nearby: React.FC = () => {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [mapUrl, setMapUrl] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  useEffect(() => {
    if (nearbyLocations.length > 0) {
      setSelectedLocation(nearbyLocations[0]);
      setMapUrl(nearbyLocations[0].map);
      setIsMapOpen(true);
    }
  }, []);

  const openMapModal = (url: string, location: Location) => {
    setMapUrl(url);
    setSelectedLocation(location);
    setIsMapOpen(true);
    setTimeout(() => {
      const mapSection = document.getElementById('mapSection');
      if (mapSection) {
        mapSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, 0);
  };

  const handleLocationClick = (location: Location) => {
    openMapModal(location.map, location);
  };

  return (
    <div className="flex flex-col items-center">
      <ul className="nearby-scroll sticky top-14 z-30 flex max-w-full flex-nowrap items-start justify-start gap-3 overflow-x-auto pb-1 md:mb-12">
        {nearbyLocations.map((location) => (
          <li
            key={location.name}
            className={`my-2 min-w-64 cursor-pointer border border-dark/20 px-2 py-1 shadow transition-all duration-300 ease-linear hover:bg-dark/10 sm:px-4 sm:py-3 ${
              selectedLocation === location ? 'bg-black/20 text-black' : ''
            }`}
            onClick={() => handleLocationClick(location)}
            aria-label={location.name}
            title="Get Direction"
          >
            <span className="text-xs font-medium md:text-sm">
              {location.name}
            </span>
          </li>
        ))}
      </ul>
      <div className="size-full">
        {isMapOpen && (
          <div
            id="mapSection"
            className="relative w-full scroll-mt-32 md:scroll-mt-32 2xl:scroll-mt-32"
          >
            <iframe
              title="Map"
              src={mapUrl}
              className="h-80 w-full md:h-96 lg:h-[85vh]"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nearby;
