import React, { useState, useEffect } from 'react';
import './PhotoGallery.scss'; 

interface Photo {
  src: string;
  alt: string;
}

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    // Simulate fetching photo data
    const fetchPhotos = async () => {
      const images: Photo[] = [
        { src: `${process.env.PUBLIC_URL}/images/photo1.jpg`, alt: 'Photo 1' },
        { src: `${process.env.PUBLIC_URL}/images/photo2.jpg`, alt: 'Photo 2' },
        // Add more photos here
      ];
      setPhotos(images);
    };

    fetchPhotos();
  }, []);

  return (
    <div className="gallery"> 
      {photos.map((photo, index) => (
        <img key={index} src={photo.src} alt={photo.alt} className="photo" /> 
      ))}
    </div>
  );
};

export default PhotoGallery;
