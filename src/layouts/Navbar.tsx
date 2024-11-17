import React, { useState, useEffect } from 'react';
import { TbCalendarQuestion } from 'react-icons/tb';
import { MdStarRate, MdFacebook } from 'react-icons/md';
import { RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import favicon from '../assets/favicon.png';
import { FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  // { id: 1, title: 'About', url: '/about' },
  // { id: 2, title: 'Brands', url: '/brands' },
  // { id: 3, title: 'Services', url: '/services' },
  // { id: 4, title: 'Gallery', url: '/gallery' },
  // { id: 5, title: 'Find us', url: '/contact' },
  { id: 1, title: 'About Aasra', url: '/about' },
  { id: 2, title: 'Our Hotels', url: '/our-hotels' },
  { id: 3, title: 'Banquet Hall', url: '/banquet-hall' },
  // { id: 4, title: 'Services', url: '/services' },
  { id: 5, title: 'Gallery', url: '/gallery' },
  { id: 6, title: 'Find us', url: '/contact' },
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
          visible ? 'h-16 border-b border-light/30 md:h-24' : 'h-12 md:h-16'
        } ${applyBlendMode ? 'mix-blend-difference' : 'mix-blend-normal'} ${isHomePage ? 'mix-blend-normal' : 'mix-blend-difference'} transition-[mix-blend-mode] duration-500`}
      >
        <button
          onClick={toggleNav}
          className="pointer-events-auto flex cursor-pointer items-center gap-2 border-light/50 p-0 text-light transition-all duration-1000 hover:bg-dark/50 md:border md:px-6 md:py-2 md:backdrop-blur-sm"
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
            <path d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"></path>
          </svg>
          <span className="hidden select-none text-base md:block lg:text-base">
            Menu
          </span>
        </button>
        <Logo
          aprops={`transition-1000 pointer-events-auto object-contain rounded-xl origin-center
               ${visible ? 'scale-100' : 'scale-75 md:scale-[0.6]'} ${applyBlendMode ? '' : ''}
            `}
          className="transition-1000 h-10 w-auto flex-1 object-contain p-0 md:h-20"
        />
        <Link
          to="#"
          className={`transition-1000 pointer-events-auto inline-flex items-center gap-2 border-light/50 p-0 text-light hover:bg-dark/50 md:border md:px-6 md:py-2 md:backdrop-blur-sm ${
            visible ? 'scale-100' : ''
          }`}
          aria-label="Enquiry Now"
          title="Enquiry Now"
          target="_blank"
        >
          <span className="hidden select-none text-base md:block lg:text-base">
            Enquiry Now
          </span>
          <TbCalendarQuestion className="text-2xl md:animate-bounce md:text-xl" />
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
          <IoClose className="text-3xl" />
        </button>

        <div className="justify -evenly flex size-full flex-col items-start gap-0 px-4 text-dark md:px-8">
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
                          className={`filter-black size-6 translate-x-0 rounded-full border border-dark/50 object-contain p-1 transition-all duration-300 md:translate-x-4 ${
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
                  <Link
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    title="Facebook"
                    to="#"
                    target="_blank"
                  >
                    <MdFacebook className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125" />
                  </Link>
                </li>
                <li className="group">
                  <Link
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    title="Instagram"
                    to="#"
                    target="_blank"
                  >
                    <RiInstagramFill className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125" />
                  </Link>
                </li>
                {/* <li className="group">
                  <Link
                    rel="noreferrer noopener"
                    aria-label="Tiktok"
                    title="Tiktok"
                    to="#"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125" />
                  </Link>
                </li> */}
                <li className="group">
                  <Link
                    rel="noreferrer noopener"
                    aria-label="Youtube"
                    title="Youtube"
                    to="#"
                    target="_blank"
                  >
                    <RiYoutubeFill className="text-2xl transition-all duration-300 ease-linear group-hover:scale-125" />
                  </Link>
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
