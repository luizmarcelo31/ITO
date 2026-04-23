import React, { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface LazySectionProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  minHeight?: string;
}

export function LazySection({ 
  children, 
  threshold = 0.1, 
  rootMargin = '200px',
  minHeight = '100px'
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold, rootMargin, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible]);

  return (
    <div ref={ref} style={{ minHeight }}>
      {hasBeenVisible ? children : null}
    </div>
  );
}
