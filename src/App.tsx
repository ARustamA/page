import { ParallaxText } from './components/ParallaxText';

import useMousePosition from './useMousePosition';
import { Header } from './header/Header';
import { motion } from 'framer-motion';
import styles from './app.module.css';
import { useState } from 'react';

function App(): JSX.Element {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className="">
      <Header />

      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x !== null ? x - size / 2 : 0}px ${
            y !== null ? y - size / 1.6 : 0
          }px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}>
        <p
          className="text-2xl xl:text-5xl xl:w-screen-xl py-10 px-4 lg:py-24 lg:px-16 "
          onTouchStart={() => {
            setIsHovered(true);
          }}
          onTouchEnd={() => {
            setIsHovered(false);
          }}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}>
          Приветствую тебя добрый человек, спасибо, что заглянул ;)
        </p>
      </motion.div>

      <div className={styles.body}>
        <div className={styles.typing_demo}>Frontend developeR</div>

        <span className="flex items-center gap-5 ">
          <span className={styles.span}></span>
          <span className={`${styles.text_secret} ${styles.secret_animate}`}>Открыть секрет</span>
          <span className={styles.span}></span>
        </span>
      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <h2>f</h2>
      </div>
      <section className={styles.section}>
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>

        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </section>
    </main>
  );
}

export default App;
