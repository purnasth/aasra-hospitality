import React from 'react';
import Gallery from '../components/ui/Gallery';
import { Link } from 'react-router-dom';

const GalleryPage: React.FC = () => {
  return (
    <main className="px-4">
      {/* <div className="mb-16 space-y-4">
        <span className="uppercase opacity-60">
          Collection of our best memories.
        </span>
        <h3 className="max-w-6xl text-pretty text-6xl leading-tight opacity-80">
          We have a collection of photos of our hotels, events, and our team.
        </h3>
      </div> */}
      <div className="mb-16 space-y-4 text-center">
        <span className="uppercase opacity-60">Glimpse of Memories</span>
        <h3 className="text-7xl">Aasra's Gallery</h3>
        <p className="mx-auto max-w-xl text-pretty opacity-80">
          Collection of our best memories. We have a collection of photos of our
          hotels, events, and our team. We are proud of our team and our hotels.
          We are always ready to serve you.
        </p>
      </div>
      <Gallery galleryClassName="columns-1 sm:columns-2 lg:columns-3 gap-4" />
    </main>
  );
};

export default GalleryPage;
