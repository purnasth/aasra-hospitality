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
    alt: 'Gallery Image 1',
  },
  {
    id: 'image2',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 2',
  },
  {
    id: 'image3',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 3',
  },
  {
    id: 'image6',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 6',
  },

  {
    id: 'image7',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 7',
  },
  {
    id: 'image5',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 5',
  },
  {
    id: 'image4',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 4',
  },
  {
    id: 'image8',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 8',
  },
  {
    id: 'image9',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 9',
  },
  {
    id: 'image10',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 10',
  },
  {
    id: 'image11',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 11',
  },
  {
    id: 'image12',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 12',
  },
  {
    id: 'image13',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 13',
  },
  {
    id: 'image14',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 14',
  },
  {
    id: 'image15',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 15',
  },
  {
    id: 'image16',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 16',
  },
  {
    id: 'image17',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 17',
  },
  {
    id: 'image18',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 18',
  },
  {
    id: 'image19',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 19',
  },
  {
    id: 'image20',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 20',
  },
  {
    id: 'image21',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 21',
  },
  {
    id: 'image22',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 22',
  },
  {
    id: 'image23',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 23',
  },
  {
    id: 'image24',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 24',
  },
  {
    id: 'image25',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 24',
  },
  {
    id: 'image25',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 24',
  },
  {
    id: 'image25',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 24',
  },
  {
    id: 'image26',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 24',
  },
  {
    id: 'image27',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 21',
  },
  {
    id: 'image28',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 11',
  },
  {
    id: 'image29',
    url: 'https://images.squarespace-cdn.com/content/v1/5c0c1c25aa49a1a5bf355819/1547940792567-3OCRBEXVKTU1UYOEG8PD/image1.JPG?format=2500w',
    alt: 'Gallery Image 11',
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
