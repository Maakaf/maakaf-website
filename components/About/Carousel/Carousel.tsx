'use client';

import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Dots from './Dots';
import classNames from 'classnames';
import { clearTimeout } from 'timers';

type CarouselProps = {
  className?: string;
};

const Carousel = ({ className }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: 'rtl' },
    [Autoplay()]
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

  let scrollToAutoplayTimeout: NodeJS.Timeout;
  const stopAutoplay = () => {
    // stop the carousel autoplay
    emblaApi?.plugins().autoplay?.stop();
    // clear timeout if available
    clearTimeout(scrollToAutoplayTimeout);
    scrollToAutoplayTimeout = setTimeout(() => {
      // start the carousel autoplay again after 5 seconds
      emblaApi?.plugins().autoplay?.play();
    }, 5000);
  };

  // scroll to a specific point of the carousel, and stop carousel autoplay
  const scrollTo = (index: number) => {
    emblaApi?.scrollTo(index);
    stopAutoplay();
  };

  const slides = [
    'about/image.png',
    'about/image.png',
    'about/image.png',
    'about/image.png',
    'about/image.png',
  ];

  return (
    <div className={classNames('flex flex-col', className)}>
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, slideIdx) => {
            return (
              <div
                key={slideIdx}
                className="mx-3 grow-0 shrink-0 basis-2/3 pb-[50%] md:basis-[42%] md:pb-[28%] overflow-hidden rounded-3xl border border-purple-500 relative"
              >
                <div
                  className="absolute w-full h-full top-0 left-0 bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(/${slide})` }}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-r from-slate-950 to-transparent absolute top-0 left-0 h-full w-1/4 z-10"></div>
        <div className="bg-gradient-to-l from-slate-950 to-transparent absolute top-0 right-0 h-full w-1/4 z-10"></div>
      </div>
      <Dots
        itemsLength={slides.length}
        selectedIndex={selectedIndex}
        className="mt-10"
        scrollTo={scrollTo}
      />
    </div>
  );
};

export default Carousel;
