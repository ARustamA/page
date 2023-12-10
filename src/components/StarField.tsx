import { useWindowSize } from '../hooks/useWindowSize';
import { useEffect, useRef, useState } from 'react';

const StarField = () => {
  const starFieldRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const [numStars, setNumStars] = useState(50);

  useEffect(() => {

    const handleResize = () => {
      if (width && width < 778) {
        setNumStars(33);
      } else {
        setNumStars(77);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, starFieldRef]);

  useEffect(() => {
    const container = starFieldRef.current;
    if (container) {
      container.innerHTML = ''; 

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        container.appendChild(star);
      }
    }
  }, [numStars]);

  return <div ref={starFieldRef} key='star-field' className="star-field"></div>;
};

export { StarField };
