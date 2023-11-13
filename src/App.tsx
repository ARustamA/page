import { ParallaxText } from './components/ParallaxText/ParallaxText';
import { MainTitle } from './sections/main/MainTitle';
import { Header } from './sections/header/Header';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { WelcomeSection } from './sections/WelcomSection';

function App(): JSX.Element {
  const [hiddenWelcomeBlock, setHiddenWelcomeBlock] = useState(true);

  const targetRef = useRef<HTMLDivElement>(null);
  const scrollToTarget = () => {
    if (targetRef) {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {

      const addTimer = () => {
        const hideTimer = setTimeout(() => {
          scrollToTarget();
        }, 15000);

        return () => {
          clearTimeout(hideTimer);
        };
      };
      addTimer();
      const hiddenHelloBlock = () => {
        setHiddenWelcomeBlock(true);

        const hideTimer = setTimeout(() => {
          setHiddenWelcomeBlock(false);
          scrollToTarget();
        }, 16000);

        return () => {
          clearTimeout(hideTimer);
        };
      };
      hiddenHelloBlock();
 
  }, []);

  return (
    <>
      {hiddenWelcomeBlock && <WelcomeSection />}

      <motion.div className={` w-screen min-h-screen h-screen `} ref={targetRef}>
        <Header />
        <motion.main className={`max-w-7xl mx-auto pt-7`}>
          <MainTitle />
          <div className=" mx-auto pt-10 flex gap-3">
            <div
              className="bg-slate-700 rounded-2xl p-4 w-full shadow-lg transition-shadow duration-300
            hover:shadow-slate-500 border border-slate-500">
              <p>d</p>
            </div>
          </div>
          <div className=" mx-auto pt-10 flex gap-3">
            <div
              className="bg-slate-700 rounded-2xl p-4 w-full shadow-lg transition-shadow duration-300
            hover:shadow-slate-500 border border-slate-500">
              <p>d</p>
            </div>
          </div>
          <div className=" mx-auto pt-10 flex gap-3">
            <div
              className="bg-slate-700 rounded-2xl p-4 w-full shadow-lg transition-shadow duration-300
            hover:shadow-slate-500 border border-slate-500">
              <p>d</p>
            </div>
          </div>
          <div className=" mx-auto pt-10 flex gap-3">
            <div
              className="bg-slate-700 rounded-2xl p-4 w-full shadow-lg transition-shadow duration-300
            hover:shadow-slate-500 border border-slate-500">
              <p>d</p>
            </div>
          </div>
        </motion.main>
      </motion.div>
      <motion.div className={` w-screen min-h-screen h-screen `}>
        <p>greeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
      </motion.div>
      <div className={`pt-96`}>
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
