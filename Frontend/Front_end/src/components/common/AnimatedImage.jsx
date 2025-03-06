import React from 'react';

const AnimatedImage = ({ src, alt }) => (
  <div className="relative overflow-hidden group">
    <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
  </div>
);

export default AnimatedImage;