import { ParallaxText } from './components/ParallaxText/ParallaxText';
import { WelcomeSection } from './sections/WelcomSection';
import { AnimatePresence, motion } from 'framer-motion';
import { StarField } from './components/StarField';
import { Header } from './sections/header/Header';
import { Skills } from './sections/skills/Skills';
import { Main } from './sections/main/Main';
import { useEffect, useState } from 'react';
import { About } from './sections/About';
import { Experience } from './sections/experience/Experience';

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
    <AnimatePresence mode="wait">
      <StarField />
      {isLoading ? (
        <WelcomeSection key="welcome-section" />
      ) : (
        <>
          <motion.div
            key="main"
            className={` w-screen  transition-all  ease-in-out`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}>
            <Header />
            <Main />
          </motion.div>

          <About />

          <ParallaxText baseVelocity={-2}>
            JavaScript HTML CSS ECMAScript TypeScript React.js Webpack
          </ParallaxText>

          <Skills />

          <Experience />
          <motion.section id="portfolio" key="portfolio" className="p-4 sm:px-4 pt-16">
            portfolio
          </motion.section>
          
          <ParallaxText baseVelocity={2}>
            JavaScript HTML CSS ECMAScript TypeScript React.js Webpack
          </ParallaxText>
          <motion.section id="resume" key="resume" className="p-4 sm:px-4 pt-16">
            resume
          </motion.section>

          <motion.footer id="contacts" key="contacts"></motion.footer>
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
