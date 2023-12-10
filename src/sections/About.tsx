import {  motion } from 'framer-motion';


export const About = () => {
  return (
    <motion.section id="about"  key="about" className="p-4 pt-7 sm:px-4 sm:pt-16 text-sm">
      <div className="container mx-auto max-w-7xl py-10">
        <p>
          Владею и в работе активно использую React, React router dom, Redux toolkit + rtk query,
          Typescript, SCSS, Tailwind, Formik, yup, React-hook-form, а для анимаций Framer motion. В
          каждом проекте стараюсь пользоваться ESlint и Prettier, так как они помогают писать более
          чистый, читаемый и согласованный в команде разработчиков код.
        </p>
        <br />

        <p>
          Есть минимально необходимые знания для работы с MongoDB в связке Express и NodeJS, next и
          nest, а также немного работал с Firebase. В последнее время использую Vite, но также умею
          и в Webpack. Настраивал Docker контейнеры для своих нужд, а также деплоил минипроекты в
          бесплатные хостинги. Недавно начал заниматься IT- волонтерством. В планах более глубже
          изучить Next js, React native и nest js. 🧑‍💻
        </p>
        <br />
        <p>
          При написании бакалаврской работы я имел опыт работы с базами данных MySql. Также я имею
          начальные знания по языкам программирования, таким как Python, C++ и Delphi.
        </p>
      </div>
    </motion.section>
  );
};
