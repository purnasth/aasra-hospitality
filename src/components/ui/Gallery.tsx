import React from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-video.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';

interface GalleryProps {
  limit?: number;
  galleryClassName?: string;
}

const galleryImages = [
  {
    id: 'image1',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Holiday Inn Express',
  },
  {
    id: 'image2',
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/510887703.jpg?k=ee73a3f08be01566982296da4188f7922c8bbe9970bac38897de07d5b12877c7&o=&hp=1',
    alt: 'Holiday Inn Express & Suites',
  },
  {
    id: 'image3',
    url: 'https://www.hilton.com/im/en/SLCHWHW/17678455/slchw-exterior-dusk-0123-1.jpg?impolicy=crop&cw=5000&ch=2799&gravity=NorthWest&xposition=0&yposition=267&rw=768&rh=430',
    alt: 'Homewood Suites By Hilton',
  },
  {
    id: 'image6',
    url: 'https://comfort-inn-westminster.hotels-of-london.com/data/Pictures/OriginalPhoto/7006/700637/700637143/picture-london-comfort-inn-westminster-76.JPEG',
    alt: 'Comfort Inn',
  },

  {
    id: 'image7',
    url: 'https://bucharest-comfort-suites.bucharest-hotel.com/data/Pictures/OriginalPhoto/4564/456431/456431673/bucharest-comfort-suites-picture-96.JPEG',
    alt: 'Comfort Suites',
  },
  {
    id: 'image5',
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/491204832.jpg?k=ea49ff8f1851175a34fa1d2faebddad6a7dff7e29999672204a0f16e87d93a05&o=&hp=1',
    alt: 'Ramada Worldwide',
  },
  {
    id: 'image4',
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/6d/f2/f2/comfort-inn-downtown.jpg?w=700&h=-1&s=1',
    alt: 'Comfort Inn',
  },
  {
    id: 'image8',
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/1c/d2/ca/your-stay.jpg?w=700&h=-1&s=1',
    alt: 'Holiday Inn Express',
  },
  {
    id: 'image9',
    url: 'https://instagram.fktm7-1.fna.fbcdn.net/v/t39.30808-6/453622197_880279357469684_8550127386926285045_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fktm7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=5-6r3g4DijkQ7kNvgH4jaUN&_nc_gid=846af5dea3104d14bbc09e32e0b447df&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzQyODUxODE1NDQyNTg4NDI2MQ%3D%3D.3-ccb7-5&oh=00_AYCN8mnssgIFzYdZjYexq81vdQy0biYj-f7Z_dIdzplPKA&oe=673DFBE8&_nc_sid=22de04',
    alt: 'Ramada Worldwide',
  },
  {
    id: 'image10',
    url: 'https://the-redlion.co.uk/wp-content/gallery/all-photos/weddings36.jpg',
    alt: 'Red Lion Hotel',
  },
  {
    id: 'image11',
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/370981871.jpg?k=6a5ac9c30b7ddad48130f17e1567c08f2d0cfb9d55a4f23cc684cff8c2fc4894&o=&hp=1',
    alt: 'SureStay Plus Hotel by Best Western',
  },
  {
    id: 'image12',
    url: 'https://www.kayak.com/rimg/himg/59/de/76/ice-172802-112876742-234874.jpg?width=968&height=607&crop=true',
    alt: 'Homewood Suites By Hilton',
  },
  {
    id: 'image13',
    url: 'https://the-redlion.co.uk/wp-content/gallery/all-photos/courtyard43.jpg',
    alt: 'Red Lion Hotel',
  },
  {
    id: 'image14',
    url: 'https://surestay-plus-hotel-by-best-western-sukhumvit-2.bangkokshotels.com/data/Pictures/OriginalPhoto/12810/1281005/1281005125/bangkok-surestay-plus-hotel-by-best-western-sukhumvit-2-picture-48.JPEG',
    alt: 'SureStay Plus Hotel by Best Western',
  },
  {
    id: 'image15',
    url: 'https://the-redlion.co.uk/wp-content/gallery/seamstress/cache/seamstress11.jpg-nggid03447-ngg0dyn-0x720-00f0w010c010r110f110r010t010.jpg',
    alt: 'Red Lion Hotel',
  },
  {
    id: 'image16',
    url: 'https://www.tucson-best-hotels.com/data/Pics/OriginalPhoto/15894/1589409/1589409493/pic-best-western-plus-intl-airport-hotel-suites-tucson-3.JPEG',
    alt: 'Bridgeway Inn & Suites',
  },
  {
    id: 'image17',
    url: 'https://api.sharetrip.net/api/v1/hotel/image?key=uQl4lNtF2QQochfmQoPKKAq172CtEHCgpTiwxHJHDI2P54VAvvSlRMMHS8ESTKAtTyI4gvPN24At8+W7ygfzaw==',
    alt: 'Rodeway Inn & Suites',
  },
  {
    id: 'image18',
    url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/rochestermn/rstxp-hiex-rochester-ExteriorDusk2_5A1E4339-DAFA-4B00-B865C624165A1F69_717b06d5-3427-48d1-9b5147f1cbf30792.jpg',
    alt: 'Holiday Inn Express',
  },
  {
    id: 'image19',
    url: 'https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/gb/others/durham/40471/40471_exterior_view_1.jpg',
    alt: 'Super 8 by Wyndham',
  },
  {
    id: 'image20',
    url: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_334,q_75,w_579/v1/crm/newyorkstate/NY5240_25f57a4e-a428-57d1-50163fe0cab55f63.jpg',
    alt: 'Rodeway Inn & Suites',
  },
  {
    id: 'image21',
    url: 'https://www.wyndhamhotels.com/content/dam/property-images/en-us/se/us/mt/bozeman/03266/03266_exterior_view_1.jpg',
    alt: 'Super 8 by Wyndham',
  },
];

const Gallery: React.FC<GalleryProps> = ({ limit, galleryClassName }) => {
  const displayedImages = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <>
      <LightGallery
        plugins={[lgZoom, lgVideo, lgThumbnail, lgFullscreen]}
        mode="lg-fade"
        elementClassNames={`${galleryClassName}`}
        thumbnail={true}
        autoplay={true}
      >
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="group mb-4 break-inside-avoid overflow-hidden border border-dark/20 bg-white shadow-md"
            data-src={image.url}
          >
            <img
              className="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
              src={image.url}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </LightGallery>
    </>
  );
};

export default Gallery;
