// import { ReactComponent as React } from '@/assets/icons/icons8-react.svg';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        {/* <React className={`w-12 h-12 `}/> */}
        <h2 className={styles.logo}>_ARSTM_</h2>
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
