'use client';

import React, { useState, useEffect, FC } from 'react';
import Image, { StaticImageData } from 'next/image';

const dotsContainerStyles = "absolute bottom-5 w-full flex justify-center";
const dotStyle = "mx-1 cursor-pointer w-2 h-2 rounded-full bg-gray-400";
const activeDotStyle = "bg-red-600";

// Define types for props
interface CustomSliderProps {
  items: StaticImageData[] ; // Array of image URLs
  width: number;
  height: number;
  slideImgClass?: string;
  slideContClass?: string;
  largeCont?: string;
}

const CustomSlider: FC<CustomSliderProps> = ({
  items,
  width,
  height,
  slideImgClass = '',
  slideContClass = '',
  largeCont = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`home-slider ${largeCont} h-full w-full relative top-0`}>
      <div className={`${slideContClass} flex w-full h-full overflow-hidden`}>
        {items.map((url, index) => (
          <Image
            src={url}
            alt={`Slide ${index + 1}`}
            className={`slide-img ${slideImgClass} w-full h-full object-cover`}
            style={{ translate: `${-100 * currentIndex}%` }}
            aria-hidden={currentIndex !== index}
            key={index}
            width={width}
            height={height}
          />
        ))}
      </div>
      <div className={dotsContainerStyles}>
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`${dotStyle} ${index === currentIndex ? activeDotStyle : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
