import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

interface Props {
  aprops?: string;
  className?: string;
}

const Logo: React.FC<Props> = ({ aprops, className }) => {
  return (
    <Link
      to="/"
      className={aprops ? aprops : 'cursor-pointer'}
      aria-label="Aasra Hospitality"
      title="Aasra Hospitality"
    >
      <img src={logo} alt="Aasra Hospitality Logo" className={className} />
    </Link>
  );
};

export default Logo;
