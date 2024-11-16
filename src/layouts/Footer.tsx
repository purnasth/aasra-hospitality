import React from 'react';
// import Logo from '../components/ui/Logo';
import BrandsSlider from '../components/ui/BrandsSlider';
import { Link } from 'react-router-dom';

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <>
      <footer className="px-4 py-24 text-light">
        <div className="z-30">
          {/* <div className="mx-auto max-w-xl">
              <Logo className="filter-white transition-1000 mx-auto h-16 w-auto flex-1 object-contain p-0 md:h-32" />
              <p className="text-center opacity-70">
                Aasra Hospitality is a privately owned, innovative hotel
                development and hospitality management company. We manage a
                portfolio of hotels across the United States and provide
                investor opportunities, hotel development services, hotel
                management services, and hospitality career opportunities to our
                partners and associates.
              </p>
            </div> */}

          <div className="mx-auto max-w-5xl space-y-6 text-center md:px-12">
            <span className="border border-light/50 px-4 py-1 uppercase opacity-80">
              Awards
            </span>
            <h6 className="text-xl leading-snug sm:text-2xl md:text-4xl lg:text-7xl lg:leading-snug">
              24<sup>th</sup> years of service
            </h6>
            <ul className="flex items-center justify-center gap-4">
              <li>
                <img
                  src="https://hotelhimalaya.purnashrestha.com.np/assets/sata_black-CGH8PUbu.webp"
                  alt=""
                  className="aspect-square size-28 overflow-hidden object-contain p-2"
                  draggable="false"
                />
              </li>
              <li>
                <img
                  src="https://satop100hospitalityawards.com/wp-content/uploads/2024/04/sml.png"
                  alt=""
                  className="aspect-square size-28 overflow-hidden object-contain p-2"
                  draggable="false"
                />
              </li>
              <li>
                <img
                  src="https://www.hozpitality.com/themes/mytheme/img/Tourism_Leader_Round.png"
                  alt=""
                  className="aspect-square size-28 overflow-hidden object-contain p-2"
                  draggable="false"
                />
              </li>
            </ul>
          </div>

          <hr className="my-24 border-light/30" />

          <div className="grid grid-cols-4 gap-12">
            <div className="space-y-10 py-1">
              <span className="border border-light/50 px-4 py-1 uppercase opacity-80">
                Contact Info
              </span>
              <ul className="flex flex-col items-start justify-start gap-1 text-center">
                <li>
                  <a
                    href="https://maps.app.goo.gl/iggKJDnmqRYvpbcA7"
                    className="inline-block text-xs hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="536 East Cypress Redding, California"
                  >
                    536 East Cypress Redding, California
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+12509861755"
                    className="inline-block text-xs hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="+1 530 604 3938"
                  >
                    +1 530 604 3938
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@aasrahospitality.com"
                    className="inline-block text-xs hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="info@aasrahospitality.com"
                  >
                    info@aasrahospitality.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-3 space-y-10 overflow-hidden py-1">
              <span className="border border-light/50 px-4 py-1 uppercase opacity-80">
                Our Brands
              </span>
              <BrandsSlider />
            </div>
          </div>

          <div className="mt-32 flex items-end justify-between text-lg">
            <div className="space-y-3">
              <p>&copy; {year} Aasra Hospitality | All rights reserved |</p>
              <p className="max-w-xl text-xs font-extralight text-light/70">
                All logos, trademarks, and brands are property of their
                respective owners. All company, product, and service names used
                in this website are for identification purposes only. Any
                unauthorized use, reproduction or distribution of the content of
                this website is subject to legal action.
              </p>
              <ul className="policies flex gap-8 text-light">
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-xs underline hover:no-underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/children-policy"
                    className="text-xs underline hover:no-underline"
                  >
                    Children Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pet-policy"
                    className="text-xs underline hover:no-underline"
                  >
                    Pet Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/property-rules"
                    className="text-xs underline hover:no-underline"
                  >
                    Property Rules
                  </Link>
                </li>

                <li>
                  <Link
                    to="/payment"
                    className="text-xs underline hover:no-underline"
                  >
                    Card Debit Authorization
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-sm">
              Developed by:{' '}
              <a
                href="https://www.purnashrestha.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white hover:underline"
              >
                Purna Shrestha
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
