import React, { useState, useEffect } from 'react';
import { TbArrowUpRhombus } from 'react-icons/tb';

const BackToTop: React.FC = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className={`${
        showButton
          ? 'translate-y-0 scale-100'
          : 'translate-y-20 scale-0'
      } transition-300 fixed bottom-4 left-4 z-40 flex size-9 md:size-12 animate-pulse items-center justify-center rounded-full border border-dark/30 bg-white p-1 text-dark hover:border-dark hover:bg-dark hover:text-light`}
      onClick={scrollToTop}
      title="Back to Top"
      aria-label="Back to Top"
    >
      <TbArrowUpRhombus className="text-2xl" />
    </button>
  );
};

export default BackToTop;
