import { frontendTech, languages, styles, tools } from './constants';
import { Fragment, type ComponentType, type SVGProps } from 'react';
import { motion } from 'framer-motion';
import { renderCard } from './Card';

export type TCard = {
  id: string;
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};
const boxStyle = `flex gap-3 sm:gap-5 w-full items-center justify-center`;

export const Skills = () => {
  return (
    <motion.section id="skills" key="skills" className="p-4 sm:px-4 pt-16 grid sm:gap-3">
      <h2>Технические навыки</h2>
      <div className={`${boxStyle}`}>
        {languages.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>
      <div className={`${boxStyle}`}>
        {frontendTech.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>
      <div className={`${boxStyle}`}>
        {styles.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>
      <div className={`${boxStyle} flex-wrap`}>
        {tools.map((item) => (
          <Fragment key={item.id}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </Fragment>
        ))}
      </div>
    </motion.section>
  );
};
