import { motion } from 'framer-motion';
import { SliderScreen } from '../../components/slider/SliderScreen';
import { portfolioCards } from '../../assets/constants/constants';


// https://bakery-three.vercel.app/
// https://gym1-arustama.vercel.app/
// nom-wat-landing-page.vercel.app

export const Projects = () => {
  return (
    <motion.section id="projects" key="Projects" className="p-4 grid gap-3 min-h-screen overflow-hidden">
      <h3 className="sm:text-xl">Проекты</h3>
      <div className="w-full max-w-5xl mx-auto">
        <SliderScreen portfolioCard={portfolioCards} />
      </div>
    </motion.section>
  );
};
