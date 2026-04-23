import React, { useState, useEffect } from 'react';

export function DeferredMount({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Wait until the main thread is idle (or fallback to setTimeout)
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        setTimeout(() => setShouldRender(true), delay);
      }, { timeout: 2000 });
    } else {
      setTimeout(() => setShouldRender(true), delay + 500);
    }
  }, [delay]);

  return shouldRender ? <>{children}</> : <div style={{ height: '10px' }} />;
}
