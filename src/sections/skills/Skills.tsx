import { frontendTech, languages, styles, tools } from './constants';
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
    <motion.section id="skills" key="skills" className="p-4 sm:px-4 pt-16 grid sm:gap-3 ">
      <h2 className="sm:text-xl pb-3 ">Технические навыки</h2>

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

      <div className={`${boxStyle} max-w-sm lg:max-w-full flex-wrap mx-auto`}>
      <span className={`${titleStyle}`}>Инструменты</span>
        {tools.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
};
