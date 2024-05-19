import React from 'react';
import SkeletonCard from './SkeletonCard';

const SkeletonCards = ({ cards = 16 }: { cards?: number }) => {
  const cardsToRender = Array(cards)
    .fill(null)
    .map((_, i) => i);
  return (
    <div className="flex gap-2 flex-wrap w-[90%] md:w-full max-w-[1240px] mx-auto ">
      {cardsToRender.map(card => (
        <SkeletonCard key={card} />
      ))}
    </div>
  );
};

export default SkeletonCards;
