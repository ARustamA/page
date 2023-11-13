import { ParallaxText } from './components/ParallaxText/ParallaxText';
import { ScrollMouse } from './components/ScrollMouse/ScrollMouse';
import { BackgroundCanvas } from './background/Background';
import { MainTitle } from './sections/main/MainTitle';
import { Header } from './sections/header/Header';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function App(): JSX.Element {
  const [scrollMainSection, setScrollMainSection] = useState<string | null>(null);
  const [helloBlock, setHelloBlock] = useState<string | null>(null);
  const [skillsBlock, setSkillsBlock] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHelloBlock('opacity-0 scale-50 transition-all duration-1000');
        setScrollMainSection('transform translate-y-[-100%] transition-transform duration-1000');
        setSkillsBlock('transform translate-y-[-100%] transition-transform duration-1000');
      } else {
        setHelloBlock('opacity-100 scale-100 transition-all duration-1000');
        setScrollMainSection('transform translate-y-0 duration-1000');
        setSkillsBlock('transform translate-y-0 duration-1000');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`relative w-screen h-screen  ${helloBlock}`} id="targetElement">
        <div className="absolute flex w-full h-full items-center justify-center ">
          <p className="text-2xl sm:text-5xl typingHello">Добро пожаловать</p>
        </div>
        <BackgroundCanvas />
        <ScrollMouse />
      </div>

      <div className={` w-screen h-screen ${scrollMainSection} pt-24`}>
        <Header />
        <motion.main className={`max-w-7xl mx-auto max-h-screen `}>
          <MainTitle />
          <div className=" mx-auto mt-10">
            <div className="bg-slate-700 rounded-2xl p-4">
              <p>d</p>
            </div>
          </div>
        </motion.main>
      </div>
      <div className={` w-screen h-screen ${skillsBlock}`}>
        <p>greeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
      </div>
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
