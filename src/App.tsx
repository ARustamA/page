import { ParallaxText } from './components/ParallaxText/ParallaxText';
import { WelcomeSection } from './sections/WelcomSection';
import { AnimatePresence, motion } from 'framer-motion';
import { StarField } from './components/StarField';
import { Header } from './sections/header/Header';
import { Github } from './components/Github';
import { Main } from './sections/main/Main';
import { useEffect, useState } from 'react';

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
            key="site-section"
            className={` w-screen  transition-all  ease-in-out`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}>
            <Header />
            <Main />
          </motion.div>
          <ParallaxText baseVelocity={-2}>
            JavaScript HTML CSS ECMAScript TypeScript React.js Webpack
          </ParallaxText>

          <motion.section id="about" className="p-4 sm:px-4 pt-16 text-sm">
            <div className='container mx-auto max-w-7xl py-10'>
              <p>
                Владею и в работе активно использую React, React router dom, Redux toolkit + rtk
                query, Typescript, SCSS, Tailwind, Formik, yup, React-hook-form, а для анимаций
                Framer motion. В каждом проекте стараюсь пользоваться ESlint и Prettier, так как они
                помогают писать более чистый, читаемый и согласованный в команде разработчиков код.
              </p>
              <br />

              <p>
                Есть минимально необходимые знания для работы с MongoDB в связке Express и NodeJS,
                next и nest, а также немного работал с Firebase. В последнее время использую Vite,
                но также умею и в Webpack. Настраивал Docker контейнеры для своих нужд, а также
                деплоил минипроекты в бесплатные хостинги. Недавно начал заниматься IT-
                волонтерством. В планах более глубже изучить Next js, React native и nest js. 🧑‍💻
              </p>
              <br />
              <p>
                При написании бакалаврской работы я имел опыт работы с базами данных MySql. Также я
                имею начальные знания по языкам программирования, таким как Python, C++ и Delphi.
              </p>
            </div>
          </motion.section>
          <motion.section id="skills" className="p-4 sm:px-4 pt-16">
            skills
          </motion.section>
          <motion.section id="experience" className="p-4 sm:px-4 pt-16">
            experience
            <motion.div key="github-section" className={` w-full `}>
              <Github />
            </motion.div>
          </motion.section>
          <ParallaxText baseVelocity={2}>
            JavaScript HTML CSS ECMAScript TypeScript React.js Webpack
          </ParallaxText>
          <motion.section id="resume" className="p-4 sm:px-4 pt-16">
            resume
          </motion.section>
          <motion.section id="portfolio" className="p-4 sm:px-4 pt-16">
            portfolio
          </motion.section>
          <motion.footer id="contacts"></motion.footer>
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
