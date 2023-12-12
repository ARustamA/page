import { Github } from '../../components/Github';
import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <motion.section id="experience" key="experience" className="p-4 sm:px-4 pt-16">
      <h2 className="sm:text-xl  ">Опыт</h2>

      <div className="flex flex-col sm:flex-row justify-between gap-3 max-w-5xl pb-3 mx-auto">
        <div className="flex flex-col flex-1 gap-3">
          <div className="flex flex-col sm:flex-row justify-between gap-1">
            <div className="grid">
              <p className="text-main-blue indent-3 ">Волонтерство, проект "Касание"</p>
              <strong>Frontend-разработчик</strong>
              <p className="text-xs">Декабря 2023 — по Н.В.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span>JavaScript</span>
              <span>React</span>
              <span>Firebase</span>
              <span>VK-UI</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-1">
            <div className="grid">
              <p className="text-main-blue indent-3 ">HIT Kazakstan</p>
              <strong>Frontend-разработчик</strong>
              <p className="text-xs">Февраль 2023 — по Н.В.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span>TypeScript</span>
              <span>React</span>
              <span>Redux Toolkit</span>
              <span>REST API</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-1">
            <div className="grid">
              <p className="text-main-blue indent-3 ">21tech</p>
              <strong>Intern fronted разработчик</strong>
              <p className="text-xs">Ноябрь 2022 — Февраль 2023</p>
            </div>
            <div className="grid grid-cols-2 gap-x-2">
              <span>TypeScript</span>
              <span>React</span>
              <span>REST API</span>
              <span>WebSocket</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <a href="https://github.com/ARustamA">
            <img
              loading="lazy"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=ARustamA&show_icons=true&locale=ru&layout=donut&theme=midnight-purple"
              alt="ARustamA"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 max-w-5xl mx-auto pb-3">
        <div className=" max-w-sm lg:max-w-lg">
          <p className="text-main-blue">Самообучение</p>
          <div className="flex flex-col gap-1 text-sm">
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
          </div>
        </div>
        <div className="grid gap-2 max-w-sm lg:max-w-lg">
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
        </div>
      </div>
      <motion.div className={` w-full `}>
        <Github />
      </motion.div>
    </motion.section>
  );
};
