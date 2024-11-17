import React from 'react';
import MasterSlider from './ui/MasterSlider';

const slides = [
  {
    title: 'Commitment. Reliability. Follow through.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
  },
  {
    title: 'Setting the standard in hospitality management',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941225922-SNJE6B34RVWFT80MHOG3/bed-bedroom-cozy-164595.jpg?format=2500w',
  },
  {
    title: 'Driven by teamwork and innovation',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547941521086-DOEJIY920IJFTSONER8R/adult-architect-blueprint-416405.jpg?format=2500w',
  },
];

const AboutAasra: React.FC = () => {
  return (
    <>
      <main className="bg-light px-0 pb-0">
        <div className="container mb-16 text-center">
          <span className="text-xl">Aasra means 'King of Fame'</span>
          <p className="mx-auto mt-6 max-w-4xl text-justify opacity-50 md:text-center">
            Aasra Hospitality has a vision to be the King of Fame in the
            hospitality industry. We have 100+ hotels across the world and we
            are growing. We have a team of 1000+ employees who are working hard
            to make Aasra Hospitality the best in the world.
          </p>
        </div>

        <MasterSlider
          slides={slides}
          hasContent
          sizeClassName="h-80 md:h-[110vh] w-full object-cover"
          headingClassName="text-white text-3xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-7xl xl:text-8xl lg:leading-snug max-w-5xl mx-auto [text-shadow:_0_1px_10px_#00000080]"
        />
      </main>
    </>
  );
};

export default AboutAasra;
