'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Dots from './Dots';

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: 'rtl' }
    // [Autoplay()]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on('select', selectHandler);
    // cleanup
    return () => {
      emblaApi?.off('select', selectHandler);
    };
  }, [emblaApi]);

  const slides = [
    'about/image.png',
    'about/image.png',
    'about/image.png',
    'about/image.png',
    'about/image.png',
  ];

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, slideIdx) => {
            return (
              <div
                key={slideIdx}
                className="mx-3 grow-0 shrink-0 basis-[42%] overflow-hidden rounded rounded-3xl border border-purple-500 relative pb-[28%]"
              >
                <div
                  className="absolute w-full h-full top-0 left-0 bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(/${slide})` }}
                ></div>
              </div>
            );
          })}
        </div>
        <div
          className="bg-gradient-to-r from-slate-950 to-transparent absolute top-0 left-0 h-full w-1/4 z-10"
          style={{
            backgroundImage:
              'linear-gradient(to right,var(--tw-gradient-stops))',
          }}
        ></div>
      </div>
      <Dots
        itemsLength={slides.length}
        selectedIndex={selectedIndex}
        className="mt-10"
      />
    </div>
  );
};

export default Carousel;
