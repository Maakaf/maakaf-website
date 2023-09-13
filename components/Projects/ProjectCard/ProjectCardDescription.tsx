'use client';

import { useState } from 'react';

export interface ProjectCardDescriptionProps {
  text: string;
}
const maxCharactersForText = 198;

export default function ProjectCardDescription({
  text,
}: ProjectCardDescriptionProps) {
  const [isTextExpanded, setTextExpanded] = useState(false);

  const shorthandText = `${text.slice(0, maxCharactersForText).trimEnd()}...`;

  const shouldUseShorthandText =
    text.length >= maxCharactersForText && !isTextExpanded;

  let content = text;
  if (shouldUseShorthandText) content = shorthandText;

  function handleReadMoreClick() {
    setTextExpanded(true);
  }
  return (
    <div className="font-inter text-base  text-darkText dark:text-lightText max-w-[700px]">
      {content}
      {shouldUseShorthandText && (
        <button
          type="button"
          className="text-base text-gray-400"
          onClick={handleReadMoreClick}
        >
          קרא/י עוד
        </button>
      )}
    </div>
  );
}
