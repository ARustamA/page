import { ReactComponent as Scroll } from './../../assets/icons/scroll.svg';
import { useEffect, useState } from 'react';

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
    <a href="#about">
      <Scroll className="absolute bottom-10 right-0 animate-bounce w-10 h-16" />
    </a>
  ) : null;
};
