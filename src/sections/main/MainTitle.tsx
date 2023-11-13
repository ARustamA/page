import { motion } from 'framer-motion';
import styles from './main.module.css';

import { useState } from 'react';
import useMousePosition from '../../hooks/useMousePosition';


function MainTitle() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 0;

  return ( 
    <motion.div className="relative">
    <motion.div
      className={styles.mask}
      animate={{
        WebkitMaskPosition: `${x !== null ? x - size / 1.1 : 0}px ${
          y !== null ? y - size / 1.3 : 0
        }px`,
        WebkitMaskSize: `${size}px`
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}>
      <p
        className="text-2xl xl:text-5xl xl:w-screen-xl py-10 px-4 text-center lg:px-16 "
        onTouchStart={() => {
          setIsHovered(true);
        }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onTouchEnd={() => {
          setIsHovered(false);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}>
        Приветствую тебя добрый человек, спасибо, что заглянул ;)
      </p>
    </motion.div>

    <div
      className={`w-full flex flex-col items-center justify-center text-slate-400 
     lg:text-5xl  `}>
      <div className={styles.typing_demo}>Frontend developeR</div>

      <span className="flex items-center gap-5 ">
        <span className='h-1 bg-red-400 w-20 sm:w-32 lg:w-72'></span>
        <span
          className={`lg:text-xl border-b border-dotted border-blue-300 whitespace-nowrap ${styles.secret_animate}`}>
          Тут секрет
        </span>
        <span className='h-1 bg-red-400 w-20 sm:w-32 lg:w-72'></span>
      </span>
    </div>
  </motion.div>
   );
}

export  { MainTitle };