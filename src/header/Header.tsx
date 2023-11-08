// import { ReactComponent as React } from '@/assets/icons/icons8-react.svg';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollDirection('transform translate-y-[-100%] transition-transform duration-300');
      } else {
        setScrollDirection('transform translate-y-0 transition-transform duration-300');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const buttonStyle = ` hover:text-main_red whitespace-nowrap`;
  return (
    <header
      className={`h-16 bg-black999  flex items-center justify-between 
       px-4 sm:px-16 py-4 gap-5 ${scrollDirection}`}>
      <button className="cursor-cell text-xs sm:text-lg">${'{_ARSTM}'}</button>

      <nav className="text-[8px] sm:text-xs flex flex-wrap items-center gap-3 sm:gap-5">
        <button className={buttonStyle}>ОБО МНЕ</button>
        <button className={buttonStyle}>НАВЫКИ</button>
        <button className={buttonStyle}>ОПЫТ</button>
        <button className={buttonStyle}>РЕЗЮМЕ</button>
        <button className={buttonStyle}>ПОРТФОЛИО</button>
        <button className={buttonStyle}>КОНТАКТЫ</button>
      </nav>
    </header>
  );
};
