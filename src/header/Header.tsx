// import { ReactComponent as React } from '@/assets/icons/icons8-react.svg';
import { useEffect, useState } from 'react';
import styles from './header.module.css';

export const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollDirection('scrolled_left'); // Прокрутка вниз - скрываем влево
      } else {
        setScrollDirection('scrolled_right'); // Вернуть в исходное положение
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
        {/* <React className={`w-12 h-12 `}/> */}
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
