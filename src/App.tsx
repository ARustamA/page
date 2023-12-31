import { ParallaxText } from './components/ParallaxText/ParallaxText';
import { Experience } from './sections/experience/Experience';
import { WelcomeSection } from './sections/WelcomSection';
import { AnimatePresence, motion } from 'framer-motion';
import { StarField } from './components/StarField';
import { Header } from './sections/header/Header';
import { Skills } from './sections/skills/Skills';
import { Main } from './sections/main/Main';
import { useEffect, useState } from 'react';
import { Projects } from './sections/projects/Projects';
import { Contacts } from './sections/contacts/Contacts';
import { Footer } from './sections/Footer';

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <StarField />
      {isLoading ? (
        <WelcomeSection key="welcome-section" />
      ) : (
        <>
          <motion.div
            key="main-section"
            className={`transition-all  ease-in`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}>
            <Header />
            <Main />
          </motion.div>

          {/* <About /> */}

          <Skills />
          <ParallaxText baseVelocity={-2}>
            JavaScript HTML CSS ECMAScript TypeScript React.js Webpack
          </ParallaxText>
          <Experience />

          <Projects />
          <ParallaxText baseVelocity={-2}>
            JavaScript HTML CSS ECMAScript TypeScript React.js Webpack
          </ParallaxText>
          <Contacts />

          <Footer />
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
