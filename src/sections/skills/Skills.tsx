import {
  frontendTech,
  github,
  languages,
  statUrl,
  styles,
  tools,
  tools1
} from '../../assets/constants/constants';

import { motion } from 'framer-motion';
import { renderCard } from './Card';
import {
  languageAnimation,
  reactAnimation,
  statAnimation,
  tools2Animation,
  styleAnimation,
  toolsAnimation
} from './variants';

const boxStyle = `flex gap-x-3 sm:gap-5 w-full items-center justify-center relative`;
const titleStyle = `absolute -top-4 sm:left-16 opacity-50 text-sm`;

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      key="skills"
      className="p-4 sm:px-4 grid gap-3 cursor-none overflow-hidden">
      <h2 className="sm:text-xl pb-5 lg:pb-0">Технические навыки</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className={`${boxStyle} flex items-center justify-center h-48 xl:h-0 `}>
        <motion.a
          href={github}
          className={`relative xl:absolute -top-5 lg:top-4 sm:right-8 cursor-pointer  opacity-75`}>
          <motion.img
            loading="lazy"
            src={statUrl}
            alt="ARustamA"
            custom={1}
            variants={statAnimation}
          />
        </motion.a>
      </motion.div>

      <motion.div
        className={`${boxStyle}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}>
        <span className={`${titleStyle}`}>Языки</span>
        {languages.map((item, index) => (
          <motion.div key={item.id} custom={index + 1} variants={languageAnimation}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={`${boxStyle} `}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}>
        <span className={`${titleStyle}`}>Экосистема React</span>
        {frontendTech.map((item, index) => (
          <motion.div key={item.id} custom={index + 1} variants={reactAnimation}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={`${boxStyle}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}>
        <span className={`${titleStyle}`}>Стилизация</span>
        {styles.map((item, index) => (
          <motion.div key={item.id} custom={index + 1} variants={styleAnimation}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={`${boxStyle}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}>
        <span className={`${titleStyle}`}>Инструменты</span>
        {tools.map((item, index) => (
          <motion.div key={item.id} custom={index + 1} variants={toolsAnimation}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={`${boxStyle}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}>
        {tools1.map((item, index) => (
          <motion.div key={item.id} custom={index + 1} variants={tools2Animation}>
            {renderCard({ id: item.id, title: item.title, icon: item.icon })}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
