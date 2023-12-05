import { ParallaxText } from './components/ParallaxText/ParallaxText';
import { ReactComponent as Sendme } from './assets/icons/sendme.svg';
import { ReactComponent as Save } from './assets/icons/save.svg';
import { ScrollMouse } from './components/ScrollMouse/ScrollMouse';
import { WelcomeSection } from './sections/WelcomSection';
import { AnimatePresence, motion } from 'framer-motion';
import { SharedModal } from './components/SharedModal';
import { MainTitle } from './sections/main/MainTitle';
import { Header } from './sections/header/Header';
import { Github } from './components/Github';
import { useEffect, useState } from 'react';
import laptopImg from './assets/about.png';
import CV from './assets/resume.pdf';

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [sharedModal, setSharedModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  // https://github.com/soumyajit4419/Portfolio
  // https://github.com/smakosh/next-portfolio-dev
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <WelcomeSection key="welcome-section" />
      ) : (
        <>
          <motion.div
            key="site-section"
            className={` w-screen min-h-screen  transition-all  ease-in`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}>
            <Header />
            <motion.main className={`max-w-7xl mx-auto pt-7 px-3 relative`}>
              <MainTitle />
              <div className="flex flex-col sm:flex-row pt-3 lg:pt-14 ">
                <div className=" flex gap-3 h-min mx-auto">
                  <div
                    className="
                  p-4 w-full flex gap-3 items-center max-w-sm lg:max-w-lg">
                    <p className="text-xs sm:text-base">
                      Я - фронтенд разработчик, специализирующийся на создании веб-приложений с
                      использованием передовых практик и лучших стандартов в индустрии.
                    </p>
                    <div className="flex flex-col gap-3 justify-between">
                      <a
                        href={CV}
                        download=""
                        className="p-4 h-min text-xs bg-main_red/70 hover:bg-main_red hover:rounded-se-3xl 
                      hover:rounded-es-3xl hover:scale-110 transition-transform delay-100 whitespace-nowrap
                      flex gap-1 items-center">
                        Скачать резюме
                        <Save className={`w-5 h-5`}/>
                      </a>{' '}
                      <button
                        onClick={() => setSharedModal(true)}
                        className="text-main-blue/80 flex gap-1 items-center justify-center">
                        Написать
                        <Sendme />
                      </button>
                      <SharedModal setSharedModal={setSharedModal} sharedModal={sharedModal} />
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="max-w-sm lg:max-w-lg ">
                  <img src={laptopImg} alt="about" className="img-fluid" />
                </div>
              </div>
              {/* <ScrollMouse /> */}
            </motion.main>
          </motion.div>

          <motion.div key="github-section" className={` w-screen min-h-screen h-screen `}>
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
    </AnimatePresence>
  );
}

export default App;
