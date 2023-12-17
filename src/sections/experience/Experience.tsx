import { Github } from '../../components/Github';
import { motion, useAnimation, useInView } from 'framer-motion';
import { WorkTimeLine } from './WorkTimeLine';
import { useRef } from 'react';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const refGit = useRef(null);
  const isInViewGit = useInView(ref, { once: true });

  return (
    <motion.section id="experience" key="experience" className="p-4 sm:px-4 pt-16">
      <h2 className="sm:text-xl  ">Опыт</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-3 max-w-5xl pb-3 mx-auto">
        <WorkTimeLine />
      </div>
      <div className="flex flex-col sm:flex-row gap-5 max-w-5xl mx-auto pb-3">
        <motion.div
          className={`${isInView ? 'opacity-100' : '-translate-y-48 opacity-0'} 
        transition-all delay-300 ease-in max-w-sm lg:max-w-lg `}
          ref={ref}>
          <p className="text-main-blue">Самообучение</p>
          <motion.div className="flex flex-col gap-3 text-sm">
            <p>
              <strong>Современный учебник JavaScript. learn.javascript.ru </strong>
              {` `}
              2022 - 2023
            </p>
            <p>
              <strong>Курс "React JS - путь самурая 1.0"</strong>
              {` `}
              2022
            </p>
            <p>
              <strong>Уроки, практика WebDev с нуля </strong> 2022
            </p>
            <p>
              <strong>
                Уроки, практика, Ulbi TV (React, Redux, Redux Toolkit) Продвинутый React {` `}
              </strong>
              2022
            </p>
            <p>
              <strong>
                Михаил Непомнящий (Основы TypeScript, Тестирование React приложения){` `}
              </strong>
              2022
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className={` ${isInView ? 'opacity-100' : 'translate-y-48 opacity-0'} 
        transition-all delay-300 ease-in grid gap-2 max-w-sm lg:max-w-lg`}
          ref={ref}>
          <p className="text-main-blue">Образование</p>
          <div className="flex flex-col gap-1">
            <span className="text-main_red text-sm">
              <strong>Уфимский государственный авиационный технический университет, Уфа,</strong>{' '}
              2016
            </span>
            <p className=" text-xs">
              Факультет информатики и робототехники, Информатика и вычислительная техника
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-main_red text-sm">
              <strong>
                Башкирский государственный педагогический университет им. М. Акмуллы, Уфа,
              </strong>
              2014
            </span>
            <p className=" text-xs">Физико-математический факультет, Информатика</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        ref={refGit}
        className={`${
          isInViewGit ? 'opacity-100' : ' opacity-0 -translate-y-48 translate-x-48'
        } transition-all transform-cpu delay-700 ease-in`}>
        <Github />
      </motion.div>
    </motion.section>
  );
};
