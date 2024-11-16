import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import SliderNavigation from './SliderNavigation';

interface Slide {
  image: string;
  title?: string;
  description?: string;
}

interface MasterSliderProps {
  slides: Slide[];
  hasContent?: boolean;
  autoplay?: boolean;
  speed?: number;
  delay?: number;
  sizeClassName?: string;
  headingClassName?: string;
}

const MasterSlider: React.FC<MasterSliderProps> = ({
  slides,
  hasContent = false,
  autoplay = true,
  speed = 2000,
  delay = 3000,
  sizeClassName,
  headingClassName,
}) => {
  const swiperRef = useRef<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on('slideChange', () => {
        setCurrentIndex(swiperRef.current.realIndex);
      });
    }
  }, []);

  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={autoplay ? { delay } : undefined}
        loop={true}
        speed={speed}
        spaceBetween={0}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative h-full"
        effect="fade"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative flex size-full items-center justify-center"
          >
            <img
              src={slide.image}
              alt={slide.title || `Slide ${index + 1}`}
              className={`${sizeClassName} contrast-125`}
            />
            <div className="overlay pointer-events-none absolute inset-0 -z-0 bg-gradient-to-b from-dark/30 to-dark/30" />

            {hasContent && (
              <div className="pointer-events-none absolute mt-8 w-full space-y-2 px-8 text-center text-light">
                {slide.title && (
                  <h3 className={`${headingClassName}`}>{slide.title}</h3>
                )}
                {/* {slide.description && (
                  <p className="text-center text-sm text-dark/60">
                    {slide.description}
                  </p>
                )} */}
              </div>
            )}
          </SwiperSlide>
        ))}
        <div className="absolute inset-0 z-20 flex size-full items-end justify-center p-6 md:p-20">
          <SliderNavigation
            currentIndex={currentIndex}
            totalItems={slides.length}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>
      </Swiper>
    </>
  );
};

export default MasterSlider;
