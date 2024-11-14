import React from 'react';
import { Link } from 'react-router-dom';
import { TbCalendarQuestion } from 'react-icons/tb';

const servicesContent = [
  {
    title: 'Management',
    description:
      'Aasra Hospitality has the belief that success for the hotel comes from each operating department performing at their highest level achieving financial profitability and guest satisfaction goals.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1550691046742-F0WYDYWKINVGDV23ZUGX/ServicesImgAASRA.png?format=1500w',
  },
  {
    title: 'Development',
    description:
      "Aasra Hospitality has the knowledge and proven track record to develop and position a franchised or independent hotel property that will succeed in today's competitive environment.",
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1550691085453-FU3BY5D84P96ES6K3JNF/DevelopmentAASRA.png?format=1500w',
  },

  {
    title: 'Team',
    description:
      'Headquartered in Redding, CA our corporate staff provides complete services in both business development and hotel management. We employ over 600 associates at hotels throughout the United States, located in popular destinations, including California, Oregon, Washington, Alaska, and Utah.',
    image:
      'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1550691122405-VRBOAZ33M5HISQSBUWWA/Team+AASRA+Hospitality.png?format=1500w',
  },
];

const Services: React.FC = () => {
  return (
    <main className="border-y border-dark/20 bg-light">
      <div className="grid grid-cols-5 gap-24">
        <div className="sticky top-32 col-span-2 max-h-fit space-y-4">
          <span className="uppercase opacity-60">What we do</span>
          <h3 className="text-7xl">Aasra's Services</h3>
          <p className="text-pretty opacity-80">
            Currently, our hotel portfolio is comprised of over 1900 guest rooms
            across multiple select-service, extended stay, mid-scale, and
            previously full-service hotel brands located in primary and
            secondary markets. We hold franchise licenses with Red lion Hotel,
            Choice Hotels, Hilton Worldwide, InterContinental Hotel Group,
            Wyndham Worldwide.
          </p>
          <div>
            <Link
              to="#"
              className={`transition-1000 pointer-events-auto mt-12 inline-flex items-center gap-2 border border-dark/50 px-6 py-2 text-dark shadow backdrop-blur-sm hover:bg-dark/20`}
              aria-label="Meeting"
              target="_blank"
            >
              Schedule a meeting
              <TbCalendarQuestion className="animate-bounce text-base" />
            </Link>
          </div>
        </div>
        <div className="col-span-3 space-y-32">
          {servicesContent.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-[32rem] w-full object-cover"
              />
              {/* <div className="mx-auto max-w-2xl -translate-y-1/2 space-y-5 bg-light p-8"> */}
              <div className="space-y-5 py-5">
                <h5 className="font-body text-4xl">{service.title}</h5>
                <p className="text-pretty opacity-80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
