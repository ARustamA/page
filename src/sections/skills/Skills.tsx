import type { ComponentType, SVGProps } from 'react';
import { motion } from 'framer-motion';
import { skillSet } from './constants';
import { renderCard } from './Card';

export type TCard = { id: string; title: string; icon: ComponentType<SVGProps<SVGSVGElement>> };

export const Skills = () => {
  return (
    <motion.section id="skills" className="p-4 sm:px-4 pt-16">
      <h2>Технические навыки</h2>
      <div className='flex gap-5 w-full items-center justify-center'>
        {skillSet.map((item) => (
          <div key={item.id}>{renderCard({ id: item.id, title: item.title, icon: item.icon })}</div>
        ))}
      </div>
    </motion.section>
  );
};
