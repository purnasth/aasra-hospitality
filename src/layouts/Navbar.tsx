import React, { useState, useEffect } from 'react';
import { TbCalendarQuestion } from 'react-icons/tb';
import { MdStarRate } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import favicon from '../assets/favicon.png';

const navLinks = [
  { id: 1, title: 'About', url: '/about' },
  { id: 2, title: 'Brands', url: '/food-menu' },
  { id: 3, title: 'Services', url: '/services' },
  { id: 4, title: 'Gallery', url: '/gallery' },
  { id: 5, title: 'Find us', url: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [applyBlendMode, setApplyBlendMode] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
      setApplyBlendMode(currentScrollPos > window.innerHeight * 0.95); // Trigger blend mode after 95vh
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
        className={`pointer-events-none fixed top-0 z-40 flex w-full items-center justify-between px-4 transition-all duration-1000 ease-in-out ${
          visible ? 'h-24 border-b border-light/30' : 'h-16'
        } ${applyBlendMode ? 'mix-blend-difference' : 'mix-blend-normal'} ${isHomePage ? 'mix-blend-normal' : 'mix-blend-difference'} transition-[mix-blend-mode] duration-500`}
      >
        <button
          onClick={toggleNav}
          className="pointer-events-auto flex cursor-pointer items-center gap-2 border border-light/50 px-6 py-2 text-light backdrop-blur-sm transition-all duration-1000 hover:bg-dark/50"
          title="Menu"
          aria-label="Menu"
          type="button"
        >
          <svg
            className="size-6 object-contain text-light"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="translate-y-[2px] scale-[0.85]"
              d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"
            ></path>
          </svg>
          <span className="hidden select-none text-base md:block lg:text-base">
            Menu
          </span>
        </button>
        <Logo
          aprops={`transition-1000 pointer-events-auto object-contain rounded-xl origin-center
               ${visible ? 'scale-100' : 'scale-[0.6]'} ${applyBlendMode ? '' : ''}
            `}
          className="transition-1000 h-16 w-auto flex-1 object-contain p-0 md:h-20"
        />
        <Link
          to="#"
          className={`transition-1000 pointer-events-auto inline-flex items-center gap-2 border border-light/50 px-6 py-2 text-light shadow backdrop-blur-sm hover:bg-dark/50 ${
            visible ? 'scale-100' : ''
          }`}
          aria-label="Enquiry Now"
          title="Enquiry Now"
          target="_blank"
        >
          Enquiry Now
          <TbCalendarQuestion className="animate-bounce text-base" />
        </Link>
      </header>

      <nav
        className={`transition-1000 fixed left-0 top-0 z-50 h-screen w-full overflow-y-auto bg-light md:w-[28rem] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 inline-flex items-center justify-center gap-2 text-dark"
          aria-label="Close"
          title="Close"
        >
          {/* Close */}
          <IoClose className="text-2xl" />
        </button>

        <div className="justify -evenly flex size-full flex-col items-start gap-0 px-8 text-dark">
          <div className="mt-12 w-full">
            <span className="text-xs uppercase text-dark/50">Navigation</span>

            <ul className="links mt-6 flex flex-col items-start justify-start gap-2 md:gap-6">
              {navLinks.map((link) => (
                <li className="group w-full" key={link.id}>
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `navlink flex items-center gap-2 ${
                        isActive ? 'text-black' : 'text-dark'
                      }`
                    }
                    aria-label={link.title}
                  >
                    {({ isActive }) => (
                      <>
                        {link.title}
                        <img
                          src={favicon}
                          alt="favicon"
                          className={`filter-black size-6 translate-x-4 rounded-full border border-dark/50 object-contain p-1 transition-all duration-300 ${
                            isActive
                              ? '-translate-x-0 opacity-100'
                              : 'opacity-0 group-hover:-translate-x-0 group-hover:opacity-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-8 w-full border-dark/20" />
          <div className="w-full space-y-4">
            <span className="text-xs uppercase text-dark/50">Contact Info</span>
            <div className="space-y-8">
              <ul className="flex flex-col items-start justify-start gap-1 text-center">
                <li>
                  <a
                    href="https://maps.app.goo.gl/iggKJDnmqRYvpbcA7"
                    className="inline-block text-base hover:underline"
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
                    className="inline-block text-base hover:underline"
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
                    className="inline-block text-base hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="info@aasrahospitality.com"
                  >
                    info@aasrahospitality.com
                  </a>
                </li>
              </ul>
              <ul className="my-6 flex items-start justify-start gap-4 text-2xl">
                <li className="group">
                  <a
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    title="Facebook"
                    href="/"
                    target="_blank"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 320 512"
                      className="size-5 object-contain transition-all duration-300 ease-linear group-hover:scale-125"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                </li>
                <li className="group">
                  <a
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    title="Instagram"
                    href="/"
                    target="_blank"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      className="size-5 object-contain transition-all duration-300 ease-linear group-hover:scale-125"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z" />
                    </svg>
                  </a>
                </li>
                <li className="group">
                  <a
                    rel="noreferrer noopener"
                    aria-label="Tiktok"
                    title="Tiktok"
                    href="/"
                    target="_blank"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 512 512"
                      className="size-5 object-contain transition-all duration-300 ease-linear group-hover:scale-125"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M412.19 118.66a109.27 109.27 0 0 1-9.45-5.5 132.87 132.87 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56 68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52 161.79 161.79 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex w-full items-center justify-between border-t-2 border-dark/10">
            <span className="flex gap-0 text-base text-dark">
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
              <MdStarRate />
            </span>
            <p className="my-4 text-sm text-dark/50">
              <strong className="font-semibold text-dark">5.0</strong>/ 15,753
              reviews
            </p>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 ml-auto h-screen w-[calc(100%-28rem)] overflow-hidden bg-[url('https://www.chateaudenmark.com/assets/LOFTHOUSE-APARTMENT-BED-1678108175.jpg')] bg-cover bg-bottom transition-all duration-1000 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-[150%]'
        }`}
        onClick={() => setIsOpen(false)}
      />
      <div
        className={`transition-1000 fixed inset-0 z-40 bg-black/50 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;
