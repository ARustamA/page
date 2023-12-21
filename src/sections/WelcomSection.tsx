import { BackgroundCanvas } from '../components/background/Background';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
  return (
    <motion.div
      className="relative w-screen h-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
      {/* <div className="absolute flex w-full h-full items-center justify-center">
        <p className="text-2xl lg:text-5xl typingHello">Добро пожаловать</p>
      </div> */}
      <BackgroundCanvas />
    </motion.div>
  );
};

export { WelcomeSection };
