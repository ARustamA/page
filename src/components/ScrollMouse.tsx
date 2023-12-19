import { ReactComponent as Scroll } from './../assets/icons/scroll.svg';
import { useEffect, useState } from 'react';
import { scrollToTarget } from '../utils/scrollToTarget';

export const ScrollMouse = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const showAndHide = () => {
      setShowScroll(true);

      const hideTimer = setTimeout(() => {
        setShowScroll(false);
      }, 15000);

      return () => {
        clearTimeout(hideTimer);
      };
    };

    const initialTimer = setTimeout(() => {
      showAndHide();
    }, 7000);

    const interval = setInterval(() => {
      showAndHide();
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return showScroll ? (
    <button onClick={() => scrollToTarget('')}>
      <Scroll className="animate-bounce sm:w-10 sm:h-16" />
    </button>
  ) : null;
};
