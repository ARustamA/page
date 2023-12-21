import { TouchEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { ReactComponent as ChevronLeft } from '../../assets/icons/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/ChevronRight.svg';
import { cn } from '../../utils/cn';
import { ReactComponent as Github } from '../../assets/portfolio/github2.svg';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      y: direction > 0 ? 1000 : -1000,
      height: 0
      // w: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    height: '100%',
    y: 0
    // w: '100%',
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      y: direction < 0 ? 1000 : -1000,
      height: 0
      // w: 0,
    };
  }
};
export type IPortCard = {
  id: string;
  title: string;
  gif: string;
  description: string;
  git: string;
  demo?: string;
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const SliderScreen = ({ portfolioCard }: { portfolioCard: IPortCard[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const imageIndex = wrap(0, portfolioCard.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    setStartX(0);
    setStartY(0);
  };

  return (
    <div className="w-full  relative">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className="absolute flex flex-col gap-3 items-center justify-center"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(_e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}>
          <h3 className="text-2xl text-center">{portfolioCard[imageIndex].title}</h3>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="grid gap-3">
              <p>{portfolioCard[imageIndex].description}</p>
              <div className="flex gap-3 items-center justify-center">
                <a
                  href={'https://' + portfolioCard[imageIndex].git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 p-2 rounded-full bg-blue2  hover:bg-main_red transition-all duration-500">
                  <Github />
                </a>
                <a
                  href={'https://' + portfolioCard[imageIndex].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue2 hover:bg-main_red transition-all duration-500 h-12 p-3 rounded-3xl">
                  Демо
                </a>
              </div>
            </div>

            <img
              src={portfolioCard[imageIndex].gif}
              alt={portfolioCard[imageIndex].title}
              className="rounded-lg "
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className={`absolute top-0 lg:top-[50%] -right-4 xl:-right-24 bg-blue2 rounded-full p-1 z-10`}
        onClick={() => paginate(1)}>
        <ChevronRight />
      </button>
      <button
        className={`absolute  top-0 lg:top-[50%] -left-4 xl:-left-24  bg-blue2 rounded-full p-1 z-10`}
        onClick={() => paginate(-1)}>
        <ChevronLeft />
      </button>
    </div>
  );
};
