import { Contact } from './Contact';
import { motion } from 'framer-motion';

import { contactCards } from '../../assets/constants/constants';
import { cardAnimation } from './variants';

const cardStyle =
  'grid gap-2 items-center justify-center border rounded-2xl py-4 px-16 transition-all duration-300 shadow-blue2 shadow-inner hover:scale-110';
const titleStyle =
  'flex flex-col gap-1 items-center justify-center hover:text-main_red cursor-none';
const linkStyle =
  'text-main-blue/80 flex gap-1 items-center justify-center duration-300 hover:text-blue-500 iconMove';

export const Contacts = () => {
  return (
    <motion.section id="contacts" key="contacts" className="p-4 ">
      <h3 className="sm:text-xl">Связаться со мной</h3>
      <div className="flex flex-col gap-3 lg:flex-row max-w-5xl mx-auto overflow-hidden">
        <Contact />

        <motion.div
          className="flex flex-col gap-3 lg:pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}>
          {contactCards.map((item, index) => (
            <motion.div
              key={item.link}
              custom={index + 1}
              variants={cardAnimation}
              className={cardStyle}>
              <div className={titleStyle}>
                <item.icon.icon />
                <p>{item.icon.title}</p>
              </div>
              <button type="button" className="hover:text-main_red">
                {item.button}
              </button>
              <a href={item.link} className={linkStyle}>
                {item.title && <span className="">{item.title}</span>}
                {item.icon2 && <item.icon2 className="transition-transform duration-300 " />}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};
