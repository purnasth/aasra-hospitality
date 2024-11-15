import React from 'react';
// import { TbArrowNarrowRight, TbArrowNarrowLeft } from 'react-icons/tb';

interface SliderNavigationProps {
  currentIndex: number;
  totalItems: number;
  onNext: () => void;
  onPrev: () => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({
  currentIndex,
  totalItems,
  onNext,
  onPrev,
}) => {
  return (
    <div className="z-10 flex items-center gap-8 text-white">
      <button onClick={onPrev} aria-label="Previous" className="text-4xl">
        &larr;
      </button>
      <span className="font-sans text-lg uppercase">
        {currentIndex + 1} / {totalItems}
      </span>
      <button onClick={onNext} aria-label="Next" className="text-4xl">
        &rarr;
      </button>
    </div>
  );
};

export default SliderNavigation;
