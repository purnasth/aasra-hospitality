import React, { useState, useEffect } from 'react';

interface Location {
  name: string;
  distance: string;
  map: string;
}

const nearbyLocations: Location[] = [
  {
    name: 'Tribhuvan International Airport, Nepal',
    distance: '25 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d58739065.62254087!2d117.36616936114793!3d26.028711542076326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb1a266b342bc5%3A0x73bbfa829a89af1b!2sTribhuvan%20International%20Airport%20(KTM)%2C%20Ring%20Rd%2C%20Kathmandu!3m2!1d27.699191499999998!2d85.3566744!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731646081791!5m2!1sen!2snp',
  },
  {
    name: 'Indira Gandhi International Airport, India',
    distance: '28 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d58536124.0255696!2d113.33932897292985!3d26.43117285422802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x390d1b85fc2a2d89%3A0xbef376182c43ed9d!2sIndira%20Gandhi%20International%20Airport%20(DEL)%2C%20New%20Delhi%2C%20Delhi%2C%20India!3m2!1d28.5561437!2d77.0999623!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731646118389!5m2!1sen!2snp',
  },
  {
    name: 'John F. Kennedy International Airport, USA',
    distance: '5 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d25504408.3859523!2d-119.28219741361161!3d38.710206598575795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89c26650d5404947%3A0xec4fb213489f11f0!2sJohn%20F.%20Kennedy%20International%20Airport%20(JFK)%2C%20Queens%2C%20NY%2C%20USA!3m2!1d40.6446245!2d-73.7797035!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731646178333!5m2!1sen!2snp',
  },
  {
    name: 'Beijing Capital International Airport, China',
    distance: '12 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d55413279.889674656!2d134.43192205160176!3d32.037909190701264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x35f105ddf670201b%3A0x497cf53a4e23be54!2sBeijing%20Capital%20International%20Airport%20(PEK)%2C%20Shunyi%20District%2C%20Beijing%2C%20China!3m2!1d40.0798573!2d116.60311209999999!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731646392256!5m2!1sen!2snp',
  },
  {
    name: 'Dubai International Airport, UAE',
    distance: '10 km',
    map: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d65312252.11368478!2d-120.01929078751567!3d2.391431649901173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3e5f5d0693260e69%3A0xe695d4007a48eee9!2sDubai%20International%20Airport%20(DXB)%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d25.256693199999997!2d55.364317799999995!4m5!1s0x54d2ecbeb97646a5%3A0xb1a107b711908383!2s536%20E%20Cypress%20Ave%2C%20Redding%2C%20CA%2096002%2C%20USA!3m2!1d40.5717631!2d-122.3620924!5e0!3m2!1sen!2snp!4v1731646308967!5m2!1sen!2snp',
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
      <ul className="nearby-scroll sticky top-14 z-30 md:mb-12 flex max-w-full flex-nowrap items-start justify-start gap-3 overflow-x-auto pb-1">
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
            <span className="text-xs font-medium md:text-xs">
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
