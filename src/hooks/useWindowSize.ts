import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  });

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  return windowSize;
};
