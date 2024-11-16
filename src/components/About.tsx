import React from 'react';
// import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main id="about" className="bg-light pt-0">
      <div className="grid grid-cols-1 content-center gap-32 md:grid-cols-3">
        <div className="mt-32 hidden space-y-24 pt-64 md:block">
          <div className="flex items-end justify-end">
            <img
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/370981871.jpg?k=6a5ac9c30b7ddad48130f17e1567c08f2d0cfb9d55a4f23cc684cff8c2fc4894&o=&hp=1"
              alt=""
              className="h-60 w-44 object-cover 2xl:h-72 2xl:w-52"
            />
          </div>
          <div className="flex items-end">
            <img
              src="https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/mt/bozeman/03266/03266_exterior_view_1.jpg"
              alt=""
              className="h-full w-80 object-cover 2xl:w-96"
            />
          </div>
          <div className="flex items-end justify-end">
            <img
              src="https://surestay-plus-hotel-by-best-western-sukhumvit-2.bangkokshotels.com/data/Pictures/OriginalPhoto/12810/1281005/1281005125/bangkok-surestay-plus-hotel-by-best-western-sukhumvit-2-picture-48.JPEG"
              alt=""
              className="h-[28rem] w-full object-cover px-6 pl-12 mt-6"
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
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/491204832.jpg?k=ea49ff8f1851175a34fa1d2faebddad6a7dff7e29999672204a0f16e87d93a05&o=&hp=1"
              alt=""
              className="h-full w-80 object-cover 2xl:w-96"
            />
          </div>
          <div className="flex">
            <img
              src="https://instagram.fktm7-1.fna.fbcdn.net/v/t39.30808-6/453622197_880279357469684_8550127386926285045_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fktm7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=5-6r3g4DijkQ7kNvgH4jaUN&_nc_gid=846af5dea3104d14bbc09e32e0b447df&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQyODUxODE1NDQyNTg4NDI2MQ%3D%3D.3-ccb7-5&oh=00_AYCN8mnssgIFzYdZjYexq81vdQy0biYj-f7Z_dIdzplPKA&oe=673DFBE8&_nc_sid=22de04"
              alt=""
              className="h-60 w-44 object-cover 2xl:h-72 2xl:w-52"
            />
          </div>
          <div className="flex items-end justify-end">
            <img
              src="https://the-redlion.co.uk/wp-content/gallery/all-photos/courtyard43.jpg"
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
