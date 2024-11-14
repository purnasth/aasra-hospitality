import React, { useState, useEffect } from 'react';

interface Location {
  name: string;
  distance: string;
  map: string;
}

const nearbyLocations: Location[] = [
  {
    name: 'Victoria International Airport',
    distance: '25 km',
    map: 'https://www.google.com/maps/embed?...',
  },
  {
    name: 'Swartz Bay Ferry Terminal',
    distance: '28 km',
    map: 'https://www.google.com/maps/embed?...',
  },
  {
    name: 'Downtown, Victoria, BC',
    distance: '5 km',
    map: 'https://www.google.com/maps/embed?...',
  },
  {
    name: 'Beacon Hill Park',
    distance: '6 km',
    map: 'https://www.google.com/maps/embed?...',
  },
  {
    name: 'University of Victoria',
    distance: '5 km',
    map: 'https://www.google.com/maps/embed?...',
  },
];

const Nearby: React.FC = () => {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [mapUrl, setMapUrl] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

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
      <ul className="nearby-scroll sticky top-14 z-30 mb-12 flex max-w-full flex-nowrap items-start justify-start gap-3 overflow-x-auto pb-1">
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
            <span className="text-xs font-semibold md:text-sm">
              {location.name}
            </span>
            <br />
            {/* <button
              className="text-sm font-bold text-orange-600"
              onClick={(e) => {
                e.stopPropagation();
                handleLocationClick(location);
              }}
              title="Get Direction"
              aria-label={location.name}
            >
              Get Direction
            </button> */}
            {/* <span className="ml-2 text-xs font-bold md:text-sm">
              - {location.distance}
            </span> */}
          </li>
        ))}
      </ul>
      <div className="size-full">
        {isMapOpen && (
          <div
            id="mapSection"
            className="relative w-full scroll-mt-32 rounded-lg md:scroll-mt-32 2xl:scroll-mt-32"
          >
            <iframe
              title="Map"
              src={mapUrl}
              className="h-64 w-full rounded-lg md:h-96 lg:h-[85vh]"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nearby;