import { ReactComponent as Github } from '../assets/skills/github2.svg';
import { ReactComponent as Telegram } from '../assets/icons/Telegram.svg';
import { ReactComponent as Linkedin } from '../assets/icons/linkedin.svg';
import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { motion } from 'framer-motion';
import { github, instagram, linkedin, urlTelegram } from '../assets/constants/constants';

const iconStyle = 'hover:text-main_red transition-all duration-300';
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <motion.footer
      id="footer"
      key="footer"
      className="flex flex-col lg:flex-row gap-2 lg:gap-5 py-5 items-center justify-between max-w-5xl mx-auto">
      <p>
        Developed by <span className='text-main_red'>A Rustam A</span>
      </p>
      <p>
        Copyright © {year} A R A
      </p>

      <ul className="flex gap-3 ">
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className={iconStyle} />
          </a>
        </li>
        <li>
          <a href={urlTelegram} target="_blank" rel="noopener noreferrer">
            <Telegram className={iconStyle} />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin className={iconStyle} />
          </a>
        </li>
        <li>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Instagram className={iconStyle} />
          </a>
        </li>
      </ul>
    </motion.footer>
  );
}

export { Footer };
