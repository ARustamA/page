import { useEffect, useRef, useState } from 'react';

const ITEMS = ['ОБО МНЕ', 'НАВЫКИ', 'ОПЫТ', 'РЕЗЮМЕ', 'ПОРТФОЛИО', 'КОНТАКТЫ'];
const buttonStyle = ` hover:text-main_red hover:scale-125 whitespace-nowrap transition-all`;

export const Header = () => {
  const [navColor, updateNavbar] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 30) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  // const scrollToTarget = () => {
  //   if (targetRef) {
  //     targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <header
      className={`  flex items-center justify-between  px-4 sm:px-16 py-4 gap-5 w-full
        ${!navColor ? 'stickyHeader' : 'navbarHeader transition-all bg-slate-900 '}
     `}>
      <button className=" cursor-cell text-xs sm:text-lg">
        <span className='whitespace-nowrap'>
          <span className="text-main_red ">R</span>STM 
          <span className='wave'>👋</span>
        </span>
      </button>

      <nav className="text-[8px] sm:text-xs flex flex-wrap items-center justify-end gap-3 sm:gap-5 cursor-cell whitespace-nowrap">
        {ITEMS.map((item, index) => (
          <button className={buttonStyle} key={index}>
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};
