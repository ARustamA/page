import { scrollToTarget } from '../../components/utils/scrollToTarget';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  { id: 'about', title: 'ОБО МНЕ' },
  { id: 'skills', title: 'НАВЫКИ' },
  { id: 'experience', title: 'ОПЫТ' },
  { id: 'portfolio', title: 'ПОРТФОЛИО' },
  { id: 'resume', title: 'РЕЗЮМЕ' },
  { id: 'contacts', title: 'КОНТАКТЫ' }
];
const buttonStyle = ` hover:text-main_red hover:scale-125 whitespace-nowrap transition-all`;

export const Header = () => {
  const [navColor, setUpdateNavbar] = useState(false);
  // const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 30) {
        setUpdateNavbar(true);
      } else {
        setUpdateNavbar(false);
      }
    }
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <motion.header
      className={`flex items-center justify-between px-4 sm:px-16 py-4 gap-5 w-full
        ${!navColor ? 'stickyHeader ' : 'navbarHeader transition-all backdrop-filter backdrop-blur-[100px] '}
     `}>
      <a href={`#main`} className=" cursor-cell text-xs sm:text-lg">
        <span className="whitespace-nowrap">
          <span className="text-main_red text-xl">R</span>STM
          <span className="wave">👋</span>
        </span>
      </a>

      <nav className="text-[8px] sm:text-xs flex flex-wrap items-center justify-end gap-3 sm:gap-5 cursor-cell whitespace-nowrap">
        {ITEMS.map((item) => (
          <button className={buttonStyle} key={item.id} onClick={() => scrollToTarget(item.id)}>
            {item.title}
          </button>
        ))}
      </nav>
    </motion.header>
  );
};
