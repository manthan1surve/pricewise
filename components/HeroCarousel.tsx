"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'; // Ensure you're importing the Next.js Image component

const heroImages = [
    { imgUrl: 'assets/images/hero-1.svg', alt: 'smartwatch' },
    { imgUrl: 'assets/images/hero-2.svg', alt: 'bag' },
    { imgUrl: 'assets/images/hero-3.svg', alt: 'lamp' },
    { imgUrl: 'assets/images/hero-4.svg', alt: 'air fryer' },
    { imgUrl: 'assets/images/hero-5.svg', alt: 'chair' },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            key={image.alt} // Ensures a unique key for each item
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
          />
        ))}
      </Carousel>
      <Image 
      src="assets/icons/hand-drawn-arrow.svg"
      alt="arrow"
      width={175}
      height={175}
      className="max-xl:hidden absolute -left-[15%] botto-3
      z-1"  
      />

    </div>
  );
};

export default HeroCarousel;
