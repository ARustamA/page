import { ReactComponent as StyledComponents } from './../../assets/skills/styledComponents.svg';
import { ReactComponent as ReactNative } from './../../assets/skills/reactNative.svg';
import { ReactComponent as ReactQuery } from './../../assets/skills/reactQuery.svg';
import { ReactComponent as PostgreSQL } from './../../assets/skills/postgreSQL.svg';
import { ReactComponent as Tailwind } from './../../assets/skills/tailwind.svg';
import { ReactComponent as Material } from './../../assets/skills/material.svg';
import { ReactComponent as Firebase } from './../../assets/skills/firebase.svg';
import { ReactComponent as Postman } from './../../assets/skills/postman.svg';
import { ReactComponent as Swagger } from './../../assets/skills/swagger.svg';
import { ReactComponent as Webpack } from './../../assets/skills/webpack.svg';
import { ReactComponent as Python } from './../../assets/skills/python.svg';
import { ReactComponent as Docker } from './../../assets/skills/docker.svg';
import { ReactComponent as MongoDB } from './../../assets/skills/mongo.svg';
import { ReactComponent as JavaScript } from './../../assets/skills/js.svg';
import { ReactComponent as TypeScript } from './../../assets/skills/ts.svg';
import { ReactComponent as Html } from './../../assets/skills/htmlSvg.svg';
import { ReactComponent as React } from './../../assets/skills/react.svg';
import { ReactComponent as Redux } from './../../assets/skills/redux.svg';
import { ReactComponent as Sass } from './../../assets/skills/sass.svg';
import { ReactComponent as Next } from './../../assets/skills/next.svg';
import { ReactComponent as Vite } from './../../assets/skills/vite.svg';
import { ReactComponent as Css } from './../../assets/skills/css3.svg';
import { ReactComponent as Github } from './../../assets/skills/github.svg';
import { ReactComponent as Eslint } from './../../assets/skills/eslint.svg';
import Gym from './../../assets/portfolio/gym.gif';
import Bakery from './../../assets/portfolio/bakery.gif';
import Nomad from './../../assets/portfolio/nomad.gif';
import { TCard } from '../../sections/skills/Skills';
import { ComponentType, SVGProps } from 'react';
import { IPortCard } from '../../components/slider/SliderScreen';

export const languages: TCard[] = [
  { id: '1', title: 'HTML5', icon: Html },
  { id: '2', title: 'CSS3', icon: Css },
  { id: '3', title: 'JavaScript', icon: JavaScript },
  { id: '4', title: 'TypeScript', icon: TypeScript },
  { id: '5', title: 'Python', icon: Python }
  // { id: '6', title: 'C++', icon: CPlus }
];
export const styles: TCard[] = [
  { id: '1', title: 'Sass', icon: Sass },
  { id: '2', title: 'Tailwind', icon: Tailwind },
  { id: '3', title: 'Styled components', icon: StyledComponents },
  { id: '4', title: 'Material', icon: Material }
];

export const frontendTech: TCard[] = [
  { id: '1', title: 'Redux Toolkit', icon: Redux },
  { id: '2', title: 'ReactQuery', icon: ReactQuery },
  { id: '3', title: 'React', icon: React },
  { id: '4', title: 'NextJs', icon: Next },
  { id: '5', title: 'React Native', icon: ReactNative }
];
export const tools: TCard[] = [
  { id: '1', title: 'Vite', icon: Vite },
  { id: '2', title: 'Webpack', icon: Github },
  { id: '3', title: 'Github', icon: Webpack },
  { id: '4', title: 'Docker', icon: Docker },
  { id: '5', title: 'ESLint', icon: Eslint },
];
export const tools1: TCard[] = [

  { id: '1', title: 'Swagger', icon: Swagger },
  { id: '2', title: 'Postman', icon: Postman },
  { id: '3', title: 'PostgreSQL', icon: PostgreSQL },
  { id: '4', title: 'MongoDB', icon: MongoDB },
  { id: '5', title: 'Firebase', icon: Firebase }
];
export type IExperience = {
  title: string;
  company_name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;

  iconBg: string;
  date: string;
  points: string[];
  tools: string[];
}

export const experiences: IExperience[] = [
  {
    title: "Frontend-разработчик",
    company_name: 'Волонтерство, проект "Касание"',
    icon: React,
    iconBg: "#17063b",
    date: "Декабря 2023 — по н.в.",
    points: [
      "Разработка части функционала админки использованием React.js",
      "Написание модулей для управления данными в бд Firebase",
      "Рефакторинг некоторой части клиентского приложения(VK app)",
    ],
    tools: [
      "TypeScript", "React", "Firebase", "VK-UI"
    ]
  },
  {
    title: "Frontend-разработчик",
    company_name: "HIT KAZAKHSTAN",
    icon: React,
    iconBg: "#410902",
    date: "Февраль 2023 — по н.в.",
    points: [
      "Разработка и сопровождение веб-приложений с использованием React.js и других связанных технологий.",
      "Сотрудничество с кросс-функциональными командами, включая дизайнеров, менеджеров по продуктам и других разработчиков, для создания высококачественных продуктов.",
      "Внедрение адаптивного дизайна и обеспечение кроссбраузерной совместимости.",
    ],
    tools: [
      "TS", "React", "ReduxToolkit", "REST API"
    ]
  },
  {
    title: "Intern fronted разработчик",
    company_name: "21tech",
    icon: React,
    iconBg: "#17063b",
    date: "Ноябрь 2022 — Февраль 2023",
    points: [
      "Верстка лендинг страниц по тех. заданию и готовому дизайну в figma, с адаптивом под мобильные устройства",
      "Реализовал запросы к бэкенду с использованием Redux Toolkit и RTk Query, для управления состоянием приложения и создания запросов к API",
      "Применил технологию WebSocket для обеспечения непрерывного взаимодействие между фронтендом и бэкендом(нативный WebSocket).",
      "Реализовал валидацию форм с использованием Formik и Yup",
    ],
    tools: [
      "TS", "React", "WebSocket", "REST API"
    ]
  },
];

export const portfolioCards: IPortCard[] = [
  {
    id: "1",
    title: "Gym",
    gif: Gym,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non eos possimus, sit quidem, optio tempora fuga deleniti minima minus cupiditate modi dolore commodi illo, unde omnis voluptatem voluptatibus adipisci?',
    git:"github.com/ARustamA/gym1",
    demo:"gym1-three.vercel.app"
  },
  {
    id: "2",
    title: "Bakery",
    gif: Bakery,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non eos possimus, sit quidem, optio tempora fuga deleniti minima minus cupiditate modi dolore commodi illo, unde omnis voluptatem voluptatibus adipisci?',
    git:"github.com/ARustamA/bakery",
    demo:"bakery-three.vercel.app/"
  },
  {
    id: "3",
    title: "Nomad water",
    gif: Nomad,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non eos possimus, sit quidem, optio tempora fuga deleniti minima minus cupiditate modi dolore commodi illo, unde omnis voluptatem voluptatibus adipisci?',
    git:"github.com/ARustamA/NomWatLandingPage",
    demo:"nom-wat-landing-page.vercel.app"
  },
]