import { Github } from '../../components/Github';
import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <motion.section id="experience" key="experience" className="p-4 sm:px-4 pt-16">
      <h2 className="text-center sm:text-xl  ">Опыт</h2>
      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto gap-3 py-3 justify-between">
        {/* Постоянно развиваюсь - изучаю новые технологии, практики web разработки на курсах, youTube
        каналах */}
        <div className="font-sans grid gap-1 max-w-sm lg:max-w-lg">
          <p>Самообучение</p>
          <div className="flex flex-col ">
            <p>
              <strong>Современный учебник JavaScript. learn.javascript.ru </strong>{` `}
              2022 - 2023
            </p>
            <p>
              <strong>Курс "React JS - путь самурая 1.0"</strong>
              2022
            </p>
            <p>
              <strong className="italic">Уроки, практика WebDev с нуля </strong> 2022
            </p>
            <p>
              <strong className="italic">
                Уроки, практика, Ulbi TV (React, Redux, MobX)Продвинутый React {` `}
              </strong>
              2022
            </p>
            <p>
              <strong className="italic">
                Михаил Непомнящий (Основы TypeScript, Тестирование React приложения){` `}
              </strong>
              2022
            </p>
          </div>
        </div>
        <div className="font-sans grid gap-1 max-w-sm lg:max-w-lg">
          <p>Образование</p>
          <div className="flex flex-col ">
            <span>
              <strong>Уфимский государственный авиационный технический университет, Уфа,</strong>{' '}
              2016
            </span>
            <p className="italic text-sm">
              Факультет информатики и робототехники, Информатика и вычислительная техника
            </p>
          </div>
          <div className="flex flex-col ">
            <span>
              <strong>
                Башкирский государственный педагогический университет им. М. Акмуллы, Уфа,
              </strong>
              2014
            </span>
            <p className="italic text-sm">Физико-математический факультет, Информатика</p>
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
      <motion.div className={` w-full `}>
        <Github />
      </motion.div>
    </motion.section>
  );
};
