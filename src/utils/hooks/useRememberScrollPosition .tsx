import { useEffect, useState } from 'react';

export const useRememberScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rememberScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  const scrollToRememberedPosition = () => {
    if (scrollPosition !== null) {
      window.scrollTo({ top: scrollPosition });
    }
  };

  return { rememberScrollPosition, scrollToRememberedPosition };
};
