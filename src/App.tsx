import { ParallaxText } from './components/ParallaxText/ParallaxText';
import { MainTitle } from './sections/main/MainTitle';
import { Header } from './sections/header/Header';

import { motion } from 'framer-motion';
import { useEffect,  useState } from 'react';
import { WelcomeSection } from './sections/WelcomSection';
import { Github } from './components/Github';
import { ScrollMouse } from './components/ScrollMouse/ScrollMouse';

function App(): JSX.Element {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  // https://github.com/soumyajit4419/Portfolio
  // https://github.com/smakosh/next-portfolio-dev
  return (
    <>
      {isLoading ? <WelcomeSection />
      :
      (
        <> 
  
        <motion.div className={` w-screen min-h-screen  `}>
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
      <ScrollMouse />

        </motion.main>
      </motion.div>
      <motion.div className={` w-screen min-h-screen h-screen `}>
      <Github />
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
      )}

     
    </>
  );
}

export default App;
