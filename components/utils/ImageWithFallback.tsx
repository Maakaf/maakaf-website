'use client';

import Image, { StaticImageData } from 'next/image';
import { SyntheticEvent, useEffect, useState } from 'react';

export interface ImageWithFallbackProps
  extends React.ComponentProps<typeof Image> {
  fallback: string | StaticImageData;
  onError?: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
}
export default function ImageWithFallback({
  fallback,
  alt,
  src,
  onError = () => undefined,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState<null | SyntheticEvent<
    HTMLImageElement,
    Event
  >>(null);

  useEffect(() => {
    setError(null);
  }, [src]);

  function handleError(e: SyntheticEvent<HTMLImageElement, Event>) {
    setError(e);
    onError(e);
  }
  return (
    <Image
      alt={alt}
      onError={handleError}
      src={error ? fallback : src}
      {...props}
    />
  );
}
