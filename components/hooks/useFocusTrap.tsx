'use client';

import { useEffect, RefObject } from 'react';

const useFocusTrap = (
  containerRef: RefObject<HTMLElement> | null,
  enabled: boolean = true
) => {
  useEffect(() => {
    if (!containerRef || !containerRef.current) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        const focusableElements = containerRef.current!.querySelectorAll(
          'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) return;

        const firstFocusable = focusableElements[0] as HTMLElement;
        const lastFocusable = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (event.shiftKey && document.activeElement === firstFocusable) {
          lastFocusable.focus();
          event.preventDefault();
        } else if (
          !event.shiftKey &&
          document.activeElement === lastFocusable
        ) {
          firstFocusable.focus();
          event.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [containerRef, enabled]);
};

export default useFocusTrap;
