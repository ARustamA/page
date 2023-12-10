import { ReactComponent as Sendme } from './../../assets/icons/sendme.svg';
import { ReactComponent as Save } from './../../assets/icons/save.svg';
import { ScrollMouse } from './../../components/ScrollMouse';
import { SharedModal } from './../../components/SharedModal';
import { MainTitle } from './../../sections/main/MainTitle';
import laptopImg from './../../assets/about.png';
import CV from './../../assets/resume.pdf';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Main = () => {
  const [sharedModal, setSharedModal] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      id="main"
      className={` relative container flex items-center`}>
      {/* <MainTitle /> */}
      <div className="flex flex-col sm:flex-row pt-3 justify-between max-w-7xl mx-auto">
        <div
          className="p-4 w-full flex flex-col sm:flex-row gap-3 items-center 
        max-w-sm lg:max-w-lg ">
          <div>
            <p className="first-letter:text-5xl text-xs sm:text-base">
              Всем привет😉, меня зовут <span className='text-main_red'>Рустам</span>, я -
              <p className="first-line:tracking-widest"> фронтенд - разработчик,</p>{' '}
              специализирующийся на создании веб-приложений с использованием передовых практик и
              лучших стандартов в индустрии.
            </p>
          </div>
          <div className="flex flex-col gap-5 justify-between">
            <a
              href={CV}
              download=""
              className="p-4 h-min text-xs bg-main_red/70 hover:bg-main_red hover:rounded-se-3xl 
            hover:rounded-es-3xl hover:scale-110 transition-transform delay-100 whitespace-nowrap
            flex gap-1 items-center">
              Скачать резюме
              <Save className={`w-5 h-5`} />
            </a>{' '}
            <button
              onClick={() => setSharedModal(true)}
              className="text-main-blue/80 flex gap-1 items-center justify-center duration-300 hover:text-blue-500 
              iconMove">
              <span className="">Написать</span>
              <Sendme className="transition-transform duration-300 " />
            </button>
            <SharedModal setSharedModal={setSharedModal} sharedModal={sharedModal} />
          </div>
        </div>
        <div className="max-w-sm lg:max-w-lg">
          <img src={laptopImg} alt="about" className="img-fluid" />
        </div>
      </div>
      <ScrollMouse />
    </motion.section>
  );
};