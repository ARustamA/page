import {
  frontendTech,
  github,
  languages,
  styles,
  tools,
  tools1
} from '../../assets/constants/constants';
import { Fragment, type ComponentType, type SVGProps } from 'react';
import { motion } from 'framer-motion';
import { renderCard } from './Card';

export type TCard = {
  id: string;
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
const boxStyle = `flex gap-x-3 sm:gap-5 w-full items-center justify-center relative`;
const titleStyle = `absolute -top-4 sm:left-16 opacity-50 text-sm`;

export const Skills = () => {
  return (
    <motion.section id="skills" key="skills" className="p-4 sm:px-4 grid gap-3 cursor-none">
      <h2 className="sm:text-xl pb-5 lg:pb-0">Технические навыки</h2>
      <div className={`${boxStyle} flex items-center justify-center h-48 xl:h-0`}>
        <a href={github} className={`relative xl:absolute -top-5 lg:top-4 sm:right-8   opacity-75`}>
          <img
            loading="lazy"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=ARustamA&show_icons=true&locale=ru&layout=donut&theme=midnight-purple"
            alt="ARustamA"
          />
        </a>
      </div>
      <div className={`${boxStyle}`}>
        <span className={`${titleStyle}`}>Языки</span>
        {languages.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>

      <div className={`${boxStyle} `}>
        <span className={`${titleStyle}`}>Экосистема React</span>
        {frontendTech.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>

      <div className={`${boxStyle}`}>
        <span className={`${titleStyle}`}>Стилизация</span>
        {styles.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>

      <div className={`${boxStyle}`}>
        <span className={`${titleStyle}`}>Инструменты</span>
        {tools.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>
      <div className={`${boxStyle}`}>
        {tools1.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
};
