import { useEffect, useState } from "react";
import { ReactComponent as Scroll } from './../../assets/icons/scroll.svg';

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
    }, 60000); 

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return showScroll ? (
    <Scroll className="absolute bottom-3 right-5 animate-bounce w-10 h-16" />
  ) : null;
};
