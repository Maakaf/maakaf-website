import React from 'react';
import SkeletonCard from './SkeletonCard';

const SkeletonCards = ({ cards = 6 }: { cards?: number }) => {
  const cardsToRender = Array(cards)
    .fill(null)
    .map((_, i) => i);
  return (
    <div className="flex mx-auto w-[90%] flex-wrap gap-4 mt-6 justify-between">
      {cardsToRender.map(card => (
        <SkeletonCard key={card} />
      ))}
    </div>
  );
};

export default SkeletonCards;
