import React from 'react';

const brands = [
  {
    title: 'Holiday Inn Express',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738594828-W3S6VYQXLXP6OBG367M2/holiday+inn+express.png?format=300w',
    description:
      'Holiday Inn Express is a mid-priced hotel chain within the InterContinental Hotels Group family of brands. As an "express" hotel, their focus is on offering limited services at a reasonable price. Standard amenities lean toward the convenient and practical which cater to business travelers and short-term stays.',
    image:
      'https://digital.ihg.com/is/image/ihg/holiday-inn-express-dubai-7531708470-4x3',
  },
  {
    title: 'Homewood Suites',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738594681-LVQOC5W2RUGSNDUFIWAM/homewood+suites+hilton.jpg?format=300w',
    description:
      'Homewood Suites by Hilton is an American chain of all-suite residential-style hotels managed by the Hilton Worldwide. The chain consists of over 100 hotels in the United States, Canada, and Mexico. Most Homewood Suites hotels are independently owned and operated by franchisees.',
    image:
      'https://cdn.prod.website-files.com/5c3d1bcc0ebf52052fcc1921/5c54d075c8d23c247402a016_homewoodsuites_01.jpg',
  },
  {
    title: 'Comfort Inn',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738593970-14HHZ9A051NJT347NR5Z/comfort+inn.png?format=300w',
    description:
      'Comfort Inn is a brand under the Choice Hotels company. Comfort Inn hotels are known for their free hot breakfast, free high-speed internet, and comfortable rooms. Comfort Inn hotels are perfect for business travelers and families.',
    image:
      'https://www.kayak.co.in/rimg/himg/f2/32/0a/ice-34331-97487671-427095.jpg?width=1366&height=768&crop=true',
  },
  {
    title: 'Comfort Suites',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738594066-CFEQC2767O4YZU8LH7J5/comfort+suites.png?format=100w',
    description:
      'Comfort Suites is a brand under the Choice Hotels company. Comfort Suites hotels are known for their spacious rooms, free hot breakfast, and free high-speed internet. Comfort Suites hotels are perfect for business travelers and families.',
    image:
      'https://media.choicehotels.com/download/Exterior+Entry+View+Night.jpg',
  },
  {
    title: 'Quality Inn',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738595223-GMH0L7MGZETEKUD3AVYX/quality+inn.png?format=300w',
    description:
      'Quality Inn is a brand under the Choice Hotels company. Quality Inn hotels are known for their free hot breakfast, free high-speed internet, and comfortable rooms. Quality Inn hotels are perfect for business travelers and families.',
    image:
      'https://www.kayak.com/rimg/himg/cd/7f/ea/ice-98332-72594681_3XL-951041.jpg?width=968&height=607&crop=true',
  },
  {
    title: 'Ramada Worldwide',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738595323-LKO479ZDQULXFFOOAVDI/ramada.jpg?format=300w',
    description:
      'Ramada Worldwide is a multinational hotel chain owned by Wyndham Hotels and Resorts. As of December 31, 2018, it operates 811 hotels with 114,614 rooms across 63 countries under the Ramada brand.',
    image:
      'https://development.wyndhamhotels.com/wp-content/uploads/2018/05/Ramada-Whitehall-PA-Exterior.jpg',
  },
  {
    title: 'Red Lion Hotels',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738595821-OVXJVNHSCGOETAVTWHF8/redlion+hotels.png?format=300w',
    description:
      'Red Lion Hotels Corporation, doing business as RLH Corporation, is an American hospitality corporation that primarily engages in the franchising, management and ownership of upscale, midscale and economy hotels.',
    image:
      'https://entertainment-now.com/wp-content/uploads/2024/02/The-Red-Lion-Hotel-Salisbury-1140x720.jpg',
  },
  {
    title: 'Red Lion Inn & Suites',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738596000-OCG557KD8MEP3RJDT46N/REDLION.png?format=300w',
    description:
      'Red Lion Inn & Suites is a brand under the Red Lion Hotels Corporation. Red Lion Inn & Suites hotels are known for their comfortable rooms, free hot breakfast, and free high-speed internet. Red Lion Inn & Suites hotels are perfect for business travelers and families.',
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/324461514.jpg?k=5f3470f7028b338077c83392d42045ac96dd7b0b69431036c076ee14ed28cbb4&o=&hp=1',
  },
  {
    title: 'SureStay Plus Hotel',
    logo: 'https://seeklogo.com/images/S/surestay-plus-hotel-by-best-western-logo-C32DAB8989-seeklogo.com.png',
    description:
      'SureStay Plus Hotel by Best Western is a brand under the Best Western company. SureStay Hotel Plus hotels are known for their comfortable rooms, free hot breakfast, and free high-speed internet. SureStay Hotel Plus hotels are perfect for business travelers and families.',
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501272193.jpg?k=043e5711cecc7b7efeb36221550068ce5ebe078dbc37182ebe052f6100bbe536&o=&hp=1',
  },
  {
    title: 'Super 8',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738596845-OZB0BT1PP3NIUX3GMT0Q/Super8_Logo.jpg?format=100w',
    description:
      'Super 8 is a brand under the Wyndham Hotels & Resorts company. Super 8 hotels are known for their comfortable rooms, free breakfast, and free high-speed internet. Super 8 hotels are perfect for business travelers and families.',
    image:
      'https://www.bedbuginjuries.com/wp-content/uploads/2018/06/super-8-hotel-bed-bugs.jpg',
  },
  {
    title: 'Bridge Way Inn & Suites',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547943123178-BB3NHET2GZBCDBP3PZHR/bridgeway+2.png?format=300w',
    description:
      'Bridge Way Inn & Suites is a brand under the Aasra Hospitality company. Bridge Way Inn & Suites hotels are known for their comfortable rooms, free breakfast, and free high-speed internet. Bridge Way Inn & Suites hotels are perfect for business travelers and families.',
    image:
      'https://www.tucson-best-hotels.com/data/Pics/OriginalPhoto/15894/1589409/1589409493/pic-best-western-plus-intl-airport-hotel-suites-tucson-3.JPEG',
  },
  {
    title: 'Roadway Inn & Suites',
    logo: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1544738596315-CYQKTBC8M4YQD1WCP4HL/rodeway+inn.png?format=300w',
    description:
      'Roadway Inn & Suites is a brand under the Aasra Hospitality company. Roadway Inn & Suites hotels are known for their comfortable rooms, free breakfast, and free high-speed internet. Roadway Inn & Suites hotels are perfect for business travelers and families.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e4/9f/4d/hotel-exterior.jpg?w=700&h=-1&s=1',
  },
];

const BrandsSlider: React.FC = () => {
  return (
    <>
      <div className="ul animate-scroll flex w-max items-center gap-4 gap-y-4">
        {brands.concat(brands).map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.title}
            className="li size-24 object-contain p-2 transition-all duration-300 ease-linear hover:scale-110"
          />
        ))}
      </div>
    </>
  );
};

export default BrandsSlider;
