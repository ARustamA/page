import { ParallaxText } from './components/ParallaxText';
import { AnimationMan } from './components/AnimationMan';
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
    <main className={styles.main}>
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
          className="text-6xl w-screen-xl py-20 px-16 "
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}>
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit
          only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className={styles.body}>
        <h2 className={styles.text_h2}>Обычный текст</h2>
        {/* <p>
          I'm a <span>selectively skilled</span> product designer with a strong focus on producing
          high-quality & impactful digital experiences.
        </p> */}
        <span className="flex items-center gap-5">
          <span className={styles.span}></span>Открыть<span className={styles.span}></span>
        </span>
      </div>
      <section className={styles.section}>
        <ParallaxText baseVelocity={-5}>Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={5}>Scroll velocity</ParallaxText>
      </section>
      {/* <div className="arrow arrow-first"></div>
      <div className="arrow arrow-second"></div> */}
    </main>
  );
}

export default App;
