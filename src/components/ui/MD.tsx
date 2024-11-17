import React from 'react';
import md from '../../assets/img/team/md.webp';

const MD: React.FC = () => {
  return (
    <>
      <main className="border-y border-dark/30 pb-0">
        <div className="flex justify-center">
          <img
            src={md}
            alt="Mehtabh Bath"
            className="z-10 h-auto w-96 origin-bottom translate-x-1/4 scale-95 object-contain 2xl:w-[30rem]"
          />
          <div className="flex -translate-x-[10%] flex-col items-start justify-center bg-dark/20 p-24 pl-56 shadow-md backdrop-blur-sm 2xl:pl-72">
            <div className="space-y-0">
              <h3 className="text-7xl">Mehtabh Bath</h3>
              <h4 className="font-body text-3xl opacity-90">
                Managing Director
              </h4>
            </div>
            <p className="mt-16 text-pretty text-justify text-xl opacity-80 2xl:text-2xl">
              Mehtabh Bath is the managing director of Aasra Hospitality. He is
              a professional hotelier with over 20 years of experience in the
              hospitality industry. He has worked with some of the best hotel
              chains in the world, including the Oberoi Group, the Taj Group,
              and the ITC Group. He has also worked with some of the best hotel
              management companies in the world, including Marriott, Hyatt, and
              Accor. He has a passion for hospitality and is committed to
              providing the best possible service to his guests.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default MD;
