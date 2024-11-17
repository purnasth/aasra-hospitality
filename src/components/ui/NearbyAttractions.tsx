import React from 'react';

interface Attraction {
  name: string;
  description: string;
  image: string;
  activities: string[];
  distance: string;
}

interface NearbyAttractionsProps {
  limit?: number;
}

const attractions: Attraction[] = [
  {
    name: 'Sundial Bridge at Turtle Bay',
    description:
      'A stunning glass-decked pedestrian bridge and architectural marvel, connecting trails along the Sacramento River. It’s a perfect spot for photography and nature walks.',
    image:
      'https://images.squarespace-cdn.com/content/v1/591d131d17bffc24f111e867/1591139538186-QTVXFBGJ2KFFZOSMPWYB/sundial+7.jpg',
    activities: ['Photography', 'Nature Walks', 'Biking', 'River Views'],
    distance: '2 miles',
  },
  {
    name: 'Whiskeytown National Recreation Area',
    description:
      'A haven for outdoor enthusiasts with activities like hiking, swimming, and kayaking. The area is known for its waterfalls, crystal-clear lake, and rich history.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/a9/ff/94/whiskeytown-national.jpg?w=900&h=500&s=1',
    activities: ['Hiking', 'Kayaking', 'Swimming', 'Fishing'],
    distance: '8 miles',
  },
  {
    name: 'Mount Shasta',
    description:
      'An iconic volcanic peak offering breathtaking views and opportunities for skiing, hiking, and mountaineering. A must-visit for adventure seekers.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/2/22/MtShasta_aerial.JPG',
    activities: ['Skiing', 'Hiking', 'Snowboarding', 'Scenic Drives'],
    distance: '60 miles',
  },
  {
    name: 'Lake Shasta Caverns',
    description:
      'A unique underground wonder, Lake Shasta Caverns offers guided tours through fascinating rock formations and ancient limestone caves.',
    image:
      'https://shastalake.net/wp-content/uploads/2018/08/4-things-can-do-lake-shasta.jpg',
    activities: ['Cave Tours', 'Boating', 'Scenic Views'],
    distance: '15 miles',
  },
  {
    name: 'Cascade Theatre',
    description:
      'A beautifully restored Art Deco-style theater that hosts concerts, plays, and cultural events. Perfect for an evening of entertainment.',
    image: 'https://live.staticflickr.com/6136/5952416502_7c0f1ac924_b.jpg',
    activities: ['Live Shows', 'Movies', 'Cultural Events'],
    distance: '3 miles',
  },
  {
    name: 'Shasta Dam',
    description:
      'One of the largest concrete gravity dams in the world, Shasta Dam offers guided tours, a visitor center, and stunning views of the surrounding area.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/8b/55/46/shasta-dam.jpg?w=1200&h=-1&s=1',
    activities: ['Dam Tours', 'Scenic Views', 'Visitor Center'],
    distance: '10 miles',
  },
  {
    name: 'Turtle Bay Exploration Park',
    description:
      'A family-friendly destination with interactive exhibits, botanical gardens, wildlife exhibits, and a museum. Fun for visitors of all ages.',
    image:
      'https://visitredding.objects.liquidweb.services/photos/dsc_4004-1000.jpg',
    activities: ['Museum Visits', 'Botanical Gardens', 'Wildlife Exhibits'],
    distance: '2 miles',
  },
  {
    name: 'Lassen Volcanic National Park',
    description:
      'A geothermal wonderland with boiling springs, fumaroles, and mud pots. The park offers hiking trails, camping, and stunning views of volcanic landscapes.',
    image:
      'https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/vc_ca101_nationalparks_lassenvolcanic_manzanitalake_rf_628846294_1280x640.jpg.webp?itok=uKsZfiQq',
    activities: ['Hiking', 'Camping', 'Geothermal Features'],
    distance: '50 miles',
  },
];

const NearbyAttractions: React.FC<NearbyAttractionsProps> = ({ limit }) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {attractions.slice(0, limit ?? attractions.length).map((attraction) => (
          <div key={attraction.name} className="overflow-hidden">
            <img
              src={attraction.image}
              alt={attraction.name}
              className="h-96 w-full object-cover"
            />
            <div className="mt-8 space-y-4">
              <h2 className="font-body text-2xl font-semibold">
                {attraction.name}
              </h2>
              <p className="line-clamp-2 opacity-80">
                {attraction.description}
              </p>
              {/* <p className="mb-2 font-medium text-gray-500">
                    Distance: {attraction.distance}
                  </p> */}
              <div>
                <h3 className="mb-4 mt-6 font-body text-xl">Things to do:</h3>
                <ul className="flex flex-wrap items-center gap-4">
                  {attraction.activities.map((activity, index) => (
                    <li
                      key={index}
                      className="border border-dark/30 px-4 py-2 hover:bg-dark/5"
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NearbyAttractions;
