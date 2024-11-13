import React, { useState, useEffect } from 'react';
import { CgMenuHotdog } from 'react-icons/cg';
import { TbCalendarQuestion } from 'react-icons/tb';
import {  MdStarRate } from 'react-icons/md';
import { PiChefHatBold } from 'react-icons/pi';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../components/ui/Logo';

const navLinks = [
  { id: 1, title: 'About Restaurant', url: '/about' },
  { id: 2, title: 'Food Menu', url: '/food-menu' },
  { id: 3, title: 'Food Gallery', url: '/gallery' },
  { id: 4, title: 'Reach to us', url: '/contact' },
  { id: 5, title: 'Promotions', url: '/offers' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [applyBlendMode, setApplyBlendMode] = useState(false);
  const location = useLocation();

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
          visible ? '' : ''
        } ${applyBlendMode ? 'mix-blend-difference' : 'mix-blend-normal'} transition-[mix-blend-mode] duration-500`}
      >
        <button
          onClick={toggleNav}
          className="transition-300 pointer-events-auto rounded-full border border-white/50 bg-dark p-2 text-white hover:border-black/80 hover:bg-white hover:text-dark"
          aria-label="Menu"
          title="Menu"
        >
          <CgMenuHotdog className="text-2xl" />
        </button>
        <Logo
          aprops={`mix-blend-normal transition-1000 pointer-events-auto object-contain origin-top rounded-xl origin-top
               ${visible ? 'scale-100' : 'scale-75'} ${applyBlendMode ? '' : ''}
            `}
          className="transition-1000 h-16 w-auto object-contain p-1 md:h-24"
        />
        <Link
          to="#"
          className={`transition-1000 border-light/50 text-light pointer-events-auto inline-flex items-center gap-2 border bg-dark/50 px-6 py-2 shadow backdrop-blur-sm ${
            visible ? 'translate-y-0 scale-100' : '-translate-y-[200%] scale-0'
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
        className={`transition-1000 bg-light fixed left-0 top-0 z-50 h-screen w-full overflow-y-auto md:w-[28rem] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } z-50`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 flex items-center justify-center gap-2 text-4xl text-black"
          aria-label="Close"
          title="Close"
        >
          &times;
        </button>

        <div className="justify -evenly flex size-full flex-col items-start gap-0 px-8 text-dark">
          <div className="mt-12 w-full">
            <span className="text-xs uppercase text-dark/50">Navigation</span>

            <ul className="links mt-6 flex flex-col items-start justify-start gap-2 md:gap-4">
              {navLinks.map((link) => (
                <li className="group w-full" key={link.id}>
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `navlink ${isActive ? 'text-orange-400' : 'text-dark'}`
                    }
                    aria-label={link.title}
                  >
                    {link.title}
                    <PiChefHatBold className="translate-x-4 rounded-full text-xl opacity-0 transition-all duration-300 group-hover:-translate-x-0 group-hover:opacity-100" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-8 w-full border-dark/20" />
          <div className="w-full space-y-4">
            <span className="text-xs uppercase text-dark/50">Contact Info</span>
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
              <strong className="font-bold text-dark">5.0</strong>/ 5,753
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
