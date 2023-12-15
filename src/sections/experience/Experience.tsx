import { Github } from '../../components/Github';
import { motion, useAnimation, useInView } from 'framer-motion';
import { WorkTimeLine } from './WorkTimeLine';

export const Experience = () => {
  const controls = useAnimation();
  const handleInViewGit = (inView: boolean) => {
    if (inView) {
      controls.start({
        y: '0',
        width: '100%'
      });
    } else {
      controls.start({
        y: '-1500',
        width: 0
      });
    }
  };



  return (
    <motion.section id="experience" key="experience" className="p-4 sm:px-4 pt-16">
      <h2 className="sm:text-xl  ">Опыт</h2>
      <div className="flex flex-col sm:flex-row justify-between gap-3 max-w-5xl pb-3 mx-auto">
        <WorkTimeLine />
      </div>
      <div className="flex flex-col sm:flex-row gap-5 max-w-5xl mx-auto pb-3">
        <motion.div className=" max-w-sm lg:max-w-lg">
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
        <motion.div className="grid gap-2 max-w-sm lg:max-w-lg">
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
        // className="w-full"
        initial={{
          y: '-1500',
          width: 0
        }}
        animate={controls}
        exit={{
          y: '-1500',
          transition: { duration: 1 }
        }}
        onViewportEnter={() => handleInViewGit(true)}
        onViewportLeave={() => handleInViewGit(false)}>
        <Github />
      </motion.div>{' '}
    </motion.section>
  );
};
