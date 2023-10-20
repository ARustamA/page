// import { ReactComponent as React } from '@/assets/icons/icons8-react.svg';
import { useEffect, useState } from 'react';
import styles from './header.module.css';

export const Header = () => {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollDirection('transform translate-y-[-100%] transition-transform duration-300'); // Прокрутка вниз - скрываем влево
      } else {
        setScrollDirection('transform translate-y-0 transition-transform duration-300'); // Вернуть в исходное положение
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${styles.header} ${scrollDirection}`}>
      <div className={styles.content}>
        <h2 className={styles.logo}>{'${_ARSTM_}'}</h2>
      </div>
      <nav className={styles.nav}>
        <button className={styles.button}>ОБО МНЕ</button>
        <button className={styles.button}>ПОРТФОЛИО</button>
        <button className={styles.button}>НАВЫКИ\ОПЫТ</button>
        <button className={styles.button}>РЕЗЮМЕ</button>
        <button className={styles.button}>КОНТАКТЫ</button>
      </nav>
    </header>
  );
};
