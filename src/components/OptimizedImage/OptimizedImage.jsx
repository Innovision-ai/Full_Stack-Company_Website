import { memo, useState } from 'react';

const OptimizedImage = memo(({ src, alt, width, height, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-wrapper ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  );
});

export default OptimizedImage;