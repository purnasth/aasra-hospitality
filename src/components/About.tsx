import React from 'react';
// import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main id="about" className="bg-light pt-0">
      <div className="grid grid-cols-1 content-center gap-32 md:grid-cols-3">
        <div className="mt-32 hidden space-y-24 pt-64 md:block">
          <div className="flex items-end justify-end">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941225922-SNJE6B34RVWFT80MHOG3/bed-bedroom-cozy-164595.jpg?format=2500w"
              alt=""
              className="h-60 w-44 object-cover 2xl:h-72 2xl:w-52"
            />
          </div>
          <div className="flex items-end">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941225922-SNJE6B34RVWFT80MHOG3/bed-bedroom-cozy-164595.jpg?format=2500w"
              alt=""
              className="h-full w-80 object-cover 2xl:w-96"
            />
          </div>
          <div className="flex items-end justify-end">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941225922-SNJE6B34RVWFT80MHOG3/bed-bedroom-cozy-164595.jpg?format=2500w"
              alt=""
              className="h-[28rem] w-full object-cover px-6 pl-12"
            />
          </div>
        </div>
        <div className="sticky top-0 flex max-h-fit flex-col items-center justify-center gap-4 text-center 2xl:gap-12">
          <div className="bottom-0 h-10 w-px bg-dark/0 xl:h-40 2xl:h-40"></div>
          <h3 className="mt-12 text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-tight xl:text-8xl 2xl:text-8xl 2xl:leading-tight">
            Aasra Hospitality
          </h3>
          <p className="mb-12 text-center text-sm text-dark/60 2xl:text-base">
            Aasra Hospitality is a privately owned, innovative hotel development
            and hospitality management company. We manage a portfolio of hotels
            across the United States and provide investor opportunities, hotel
            development services, hotel management services, and hospitality
            career opportunities to our partners and associates.
          </p>
          {/* <Link
            className="transition-1000 pointer-events-auto inline-flex items-center gap-2 border border-dark/50 px-6 py-2 text-dark shadow backdrop-blur-sm hover:bg-dark/20"
            to="/about"
            aria-label="Explore More"
          >
            Explore More
          </Link> */}
        </div>
        <div className="mt-32 hidden space-y-24 pt-64 md:block">
          <div className="flex items-end justify-end">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941225922-SNJE6B34RVWFT80MHOG3/bed-bedroom-cozy-164595.jpg?format=2500w"
              alt=""
              className="h-full w-80 object-cover 2xl:w-96"
            />
          </div>
          <div className="flex">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941225922-SNJE6B34RVWFT80MHOG3/bed-bedroom-cozy-164595.jpg?format=2500w"
              alt=""
              className="h-60 w-44 object-cover 2xl:h-72 2xl:w-52"
            />
          </div>
          <div className="flex items-end justify-end">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941225922-SNJE6B34RVWFT80MHOG3/bed-bedroom-cozy-164595.jpg?format=2500w"
              alt=""
              className="r-full h-[28rem] object-cover pl-16"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
