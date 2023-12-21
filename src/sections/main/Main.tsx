import { ReactComponent as Sendme } from './../../assets/icons/sendme.svg';
import { ReactComponent as Save } from './../../assets/icons/save.svg';
import { ScrollMouse } from './../../components/ScrollMouse';
import { SharedModal } from './../../components/SharedModal';
import laptopImg from './../../assets/about.png';
import CV from './../../assets/resume.pdf';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Typing from '../../components/Typing';

export const Main = () => {
  const [sharedModal, setSharedModal] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      id="main"
      className={` relative container grid items-center`}>
      <div className="h-min max-w-7xl mx-auto flex items-center justify-center text-lg xl:text-3xl">
        <Typing />
      </div>
      <div className="flex flex-col sm:flex-row pt-3 justify-between max-w-7xl mx-auto ">
        <div
          className="p-4 w-full flex flex-col gap-3 items-center 
        max-w-sm lg:max-w-lg ">
          <div className="leading-6 lg:leading-8  text-sm sm:text-base">
            <p className="first-letter:text-5xl indent-3 ">Всем привет😉</p>
            Меня зовут <span className="text-main_red">Рустам</span>, я -
            <h6 className="first-line:tracking-widest"> фронтенд - разработчик,</h6>{' '}
            специализирующийся на создании веб-приложений с использованием передовых практик и
            лучших стандартов в индустрии. Давайте совместно работать над созданием отличного
            пользовательского опыта!🧑‍💻
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-between">
            <a
              href={CV}
              download=""
              className="p-4 h-min text-xs border  hover:rounded-se-3xl 
            hover:rounded-es-3xl hover:scale-110 transition-all delay-200 whitespace-nowrap
            flex gap-1 items-center">
              Скачать резюме
              <Save className={`w-5 h-5`} />
            </a>{' '}
            <button
              onClick={() => setSharedModal(true)}
              className="text-main-blue/80 flex gap-1 items-center justify-center duration-300 hover:text-blue-500 iconMove">
              <span className="">Написать</span>
              <Sendme className="transition-transform duration-300 " />
            </button>
            <SharedModal setSharedModal={setSharedModal} sharedModal={sharedModal} />
          </div>
        </div>
        <div className="max-w-sm xl:max-w-lg">
          <img src={laptopImg} alt="about" className="img-fluid" />
        </div>
      </div>
    </motion.section>
  );
};
