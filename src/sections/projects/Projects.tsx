import { motion } from 'framer-motion';
import { SliderScreen } from '../../components/slider/SliderScreen';
import { portfolioCards } from '../../assets/constants/constants';


// https://bakery-three.vercel.app/
// https://gym1-arustama.vercel.app/
// nom-wat-landing-page.vercel.app

export const Projects = () => {
  return (
    <motion.section id="portfolio" key="portfolio" className="p-4 sm:px-4 pt-16 grid gap-3 min-h-screen ">
      <h3 className="sm:text-xl">Проекты</h3>
      <div className="w-full max-w-5xl mx-auto">
        <SliderScreen portfolioCard={portfolioCards} />
      </div>
    </motion.section>
  );
};