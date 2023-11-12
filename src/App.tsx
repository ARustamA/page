import { ParallaxText } from './components/ParallaxText/ParallaxText';
import { BackgroundCanvas } from './background/Background';

import { motion, useInView } from 'framer-motion';

import { ScrollMouse } from './components/ScrollMouse/ScrollMouse';
import { MainTitle } from './sections/main/MainTitle';
import { Header } from './sections/header/Header';
import { useEffect, useRef } from 'react';

function App(): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, });
  const targetRef = useRef<HTMLDivElement | null>(null);

  const scrollToTarget = () => {
    if (targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  useEffect(() => {
    if (isInView) {
      scrollToTarget();
    }
  }, [isInView, scroll]);
  return (
    <>
      <div className="relative">
        <div className="absolute flex w-screen h-screen items-center justify-center">
          <p className="text-2xl sm:text-5xl typingHello">Добро пожаловать</p>
        </div>
        <BackgroundCanvas />
        <ScrollMouse />
      </div>
      <div ref={ref}>
        <Header />
        <motion.main className="max-w-7xl mx-auto max-h-screen " ref={targetRef}>
          <MainTitle />
          <div className=" mx-auto mt-10">
            <div className="bg-slate-700 rounded-2xl p-4">
              <p>d</p>
            </div>
          </div>
        </motion.main>
      </div>
      <div className="pt-96">
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </div>
      <div className="max-w-7xl mx-auto h-screen">
        <p>gre</p>
      </div>
    </>
  );
}

export default App;
