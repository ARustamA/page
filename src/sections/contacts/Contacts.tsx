import { Contact } from '../Contact';
import { motion } from 'framer-motion';
import { ReactComponent as Telegram } from '../../assets/icons/Telegram.svg';
import { ReactComponent as WhatsApp } from '../../assets/icons/WhatsApp.svg';
import { ReactComponent as Sendme } from '../../assets/icons/sendme.svg';

import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { urlTelegram, whatsappUrl } from '../../assets/constants/constants';

const cardStyle =
  'grid gap-2 items-center justify-center border rounded-2xl py-4 px-16 transition-all duration-200 shadow-blue2 shadow-inner';
const titleStyle = 'flex flex-col gap-1 items-center justify-center hover:text-main_red ';
const linkStyle =
  'text-main-blue/80 flex gap-1 items-center justify-center duration-300 hover:text-blue-500 iconMove';

export const Contacts = () => {
  return (
    <motion.section id="contacts" key="contacts" className="p-4 sm:px-4 pt-16 ">
      <h3 className="sm:text-xl">Связаться со мной</h3>
      <div className="flex flex-col gap-3 lg:flex-row max-w-5xl mx-auto">
        <Contact />

        <div className="flex flex-col gap-3 pt-16">
          <div className={cardStyle}>
            <div className={titleStyle}>
              <Telegram />
              <p>Telegram</p>
            </div>
            <button type="button" className="hover:text-main_red">
              @RustamAkhm
            </button>
            <a href={urlTelegram} className={linkStyle}>
              <span className="">Написать</span>
              <Sendme className="transition-transform duration-300 " />
            </a>
          </div>

          <div className={cardStyle}>
            <div className={titleStyle}>
              <WhatsApp />
              <p>WhatsApp</p>
            </div>
            <button type="button" className="hover:text-main_red">
              +77476085495
            </button>
            <a href={whatsappUrl} className={linkStyle}>
              <span className="">Написать</span>
              <Sendme className="transition-transform duration-300 " />
            </a>
          </div>

          <div className={cardStyle}>
            <div className={titleStyle}>
              <Linkedin />
              <p>Linkedin</p>
            </div>
            <button type="button" className="hover:text-main_red">
              rustam-akhmetyanov
            </button>
            <a
              href="https://www.linkedin.com/in/rustam-akhmetyanov/"
              target="_blank"
              className={linkStyle}>
              <span className="">Написать</span>
              <Sendme className="transition-transform duration-300 " />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
