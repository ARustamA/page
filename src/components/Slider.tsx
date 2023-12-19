import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { memo, useCallback, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import type { FC } from 'react';

import { FullSliderImage } from './FullSliderImage';

import { ReactComponent as ChevronLeft } from '@/assets/icons/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '@/assets/icons/ChevronRight.svg';
import { useWindowSize } from '../utils/hooks/useWindowSize';

type IProp = {
  data: {
    link: string;
  }[];
  isFull?: boolean;
};

const MOBILE_WIDTH = 778;
const ANIMATION_DURATION = 300;
export const Slider: FC<IProp> = memo(({ data, isFull }) => {
  // eslint-disable-next-line no-unused-vars
  const [transition, setTransition] = useState<'slide_l' | 'slide_r'>('slide_r');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openFull, setOpenFull] = useState(false);

  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const handlers = useSwipeable({
    onSwipedRight: () => prevSlide(),
    onSwipedLeft: () => nextSlide()
  });
  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    }
  }, [data.length, isAnimating]);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
  }, [data.length, isAnimating]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          nextSlide();
          break;
        case 'ArrowLeft':
          prevSlide();
          break;
      }
    },
    [nextSlide, prevSlide]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, handleKeyDown, transition]);

  useEffect(() => {
    if (isAnimating) {
      controls.start({ opacity: 0, x: -50 });
      setTimeout(() => {
        controls.start({ opacity: 1, x: 0 });
        setIsAnimating(false);
      }, ANIMATION_DURATION);
    }
  }, [isAnimating, controls]);

  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width && width < MOBILE_WIDTH) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <>
      <div
        className="max-w-[1400px] w-full h-full relative group 
      bg-inherit flex items-center justify-center ">
        <AnimatePresence initial={false}>
          {data.map((slide, slideIndex) => (
            <motion.img
              key={slideIndex}
              src={`${slide.link}`}
              alt="image"
              {...handlers}
              className="rounded-lg h-full  absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ objectFit: 'contain', borderRadius: '0.5rem' }} 
              initial={{
                opacity: 0,
                x: slideIndex === currentIndex ? 0 : -50,
                pointerEvents: 'none'
              }}
              animate={currentIndex === slideIndex ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              loading="lazy"
              onClick={() => !isFull && setOpenFull(true)}
              // onTouchEnd={() => !isFull && setOpenFull(true)}
            />
          ))}
        </AnimatePresence>
        {data.length > 1 && (
          <>
            <motion.div
              className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 
                translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-black/20 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <ChevronLeft onClick={prevSlide} size={25} className="text-main_red" />
            </motion.div>

            <motion.div
              className="hidden md:group-hover:block absolute top-[50%] -translate-x-0 
                  translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-black/20 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <ChevronRight onClick={nextSlide} size={25} className="text-main_red" />
            </motion.div>
          </>
        )}

        {data.length > 1 && (
          <div className=" flex items-center justify-center gap-2 absolute -bottom-4 ">
            {data.map((_slide, slideIndex) => (
              <motion.div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'active' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: slideIndex * 0.1 }}>
                <div
                  className={`h-2 w-10 rounded-full  bg-blue3  ${
                    slideIndex === currentIndex ? 'bg-second_red' : ''
                  }`}></div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      {!isMobile && (
        <FullSliderImage data={data} isOpenModal={openFull} setIsOpenModal={setOpenFull} />
      )}
    </>
  );
});
