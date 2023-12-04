import { useEffect, useRef, useState } from "react";

const ITEMS = ['ОБО МНЕ', 'НАВЫКИ', 'ОПЫТ', 'РЕЗЮМЕ', 'ПОРТФОЛИО','КОНТАКТЫ' ];
const buttonStyle = ` hover:text-main_red hover:scale-125 whitespace-nowrap transition-all`;

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
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


  const scrollToTarget = () => {
    if (targetRef) {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
 
      className={`h-16  bg-slate-900  flex items-center justify-between 
      
        ${!navColor ? "stickyHeader" : "navbarHeader transition-all" }
      px-4 sm:px-16 py-4 gap-5 w-full`}>
      <button className=" cursor-cell text-xs sm:text-lg">
        <span><span className="text-main_red ">R</span></span>
        STM 🧑‍💻
      </button>

      <nav className="text-[8px] sm:text-xs flex flex-wrap items-center gap-3 sm:gap-5 cursor-cell whitespace-nowrap">
      {ITEMS.map((item, index) => (
        <button className={buttonStyle} key={index}>
          {item}
        </button>
      ))}
      </nav>
    </header>
  );
};
