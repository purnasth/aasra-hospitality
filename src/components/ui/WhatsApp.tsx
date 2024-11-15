import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbBrandWhatsapp } from 'react-icons/tb';

const WhatsApp: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      to="https://wa.me/+15306043938"
      target="_blank"
      rel="noreferrer"
      className={`${
        showButton
          ? 'translate-y-0 scale-75 sm:scale-100'
          : 'translate-y-20 scale-0'
      } transition-300 fixed bottom-4 right-4 z-40 flex size-12 animate-pulse items-center justify-center rounded-full border border-dark/30 bg-white p-1 text-dark hover:border-dark hover:bg-dark hover:text-light`}
      title="WhatsApp"
      aria-label="WhatsApp"
    >
      <TbBrandWhatsapp className="p-px text-4xl" />
    </Link>
  );
};

export default WhatsApp;
