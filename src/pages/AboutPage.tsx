import React from 'react';
import AboutDetails from '../components/AboutDetails';
import AboutAasra from '../components/AboutAasra';
import Services from '../components/Services';
import GuestBook from '../components/ui/GuestBook';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutDetails />
      <AboutAasra />
      <Services />
      <GuestBook />
    </>
  );
};

export default AboutPage;
