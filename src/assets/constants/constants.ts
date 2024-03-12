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
import { ReactComponent as Telegram } from '../../assets/icons/Telegram.svg';
import { ReactComponent as WhatsApp } from '../../assets/icons/WhatsApp.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Sendme } from '../../assets/icons/sendme.svg';
import Gym from './../../assets/portfolio/gym.gif';
import Bakery from './../../assets/portfolio/bakery.gif';
import Nomad from './../../assets/portfolio/nomad.gif';


import { IContactCard, IExperience, IPortCard, TCard } from './types';

export const urlTelegram = `https://t.me/RustamAkhm`;
export const linkedin = `https://www.linkedin.com/in/rustam-akhmetyanov/`;
export const github = `https://github.com/ARustamA`;
export const instagram = `https://www.instagram.com/pyctjk/`;
export const whatsappUrl = `whatsapp://send?phone=+77476085495&text=Привет😉 Меня зовут`;
export const vkontakteUrl = `https://vk.com/share.php?url=arstm&title=${encodeURIComponent(`Привет 😉 Меня зовут`)}`;
export const gmailUrl = `mailto:rakhmetyanov@gmail.com?subject=${encodeURIComponent('Привет 😉')}&body=Привет 😉 Меня зовут`;

export const statUrl = `https://github-readme-stats.vercel.app/api/top-langs?username=ARustamA&show_icons=true&locale=ru&layout=donut&theme=midnight-purple`;
export const resumeLink = 'https://hh.ru/resume_converter/%D0%90%D1%85%D0%BC%D0%B5%D1%82%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%20%D0%A0%D1%83%D1%81%D1%82%D0%B0%D0%BC%20%D0%90%D0%B9%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D0%B8%D1%87.pdf?hash=f25e1593ff0bb8190d0039ed1f30686f446d70&type=pdf&hhtmSource=resume&hhtmFrom=resume_list'
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


export const experiences: IExperience[] = [
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
    title: "Frontend-разработчик",
    company_name: 'Волонтерство, проект "Касание"',
    icon: React,
    iconBg: "#17063b",
    date: "Декабря 2023 — Декабря 2023",
    points: [
      "Разработка части функционала админки на React.js",
      "Написание модулей для управления данными в бд Firebase",
      "Рефакторинг некоторой части клиентского приложения(VK app)",
    ],
    tools: [
      "TypeScript", "React", "Firebase", "VK-UI"
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
    title: "Bakery",
    gif: Bakery,
    description: 'Нужно было в сжатые сроки сделать лендинг - сайт для пекарни. Дизайн и анимации разрабатывались самостоятельно.',
    git: "github.com/ARustamA/bakery",
    demo: "bakery-three.vercel.app/"
  },
  {
    id: "2",
    title: "Nomad water",
    gif: Nomad,
    description: 'Лендинг для компании доставки воды была сверстана по готовому дизайну в Figma, с адаптивом под мобильные устройства.',
    git: "github.com/ARustamA/NomWatLandingPage",
    demo: "nom-wat-landing-page.vercel.app"
  },
  {
    id: "3",
    title: "Gym",
    gif: Gym,
    description: 'По готовому дизайну из Figma, необходимо было за короткий срок сверстать лендинг для фитнес зала. ',
    git: "github.com/ARustamA/gym1",
    demo: "gym1-three.vercel.app"
  },
]

export const contactCards: IContactCard[] = [
  {
    icon: {
      icon: Telegram,
      title: "Telegram"
    },
    button: "@RustamAkhm",
    link: urlTelegram,
    icon2: Sendme
  },
  {
    icon: {
      icon: WhatsApp,
      title: "WhatsApp"
    },
    button: "+77476085495",
    link: whatsappUrl,
    title: 'Написать',
    icon2: Sendme
  },
  {
    icon: {
      icon: Linkedin,
      title: "Linkedin"
    },
    button: "@rustam-akhmetyanov",
    link: linkedin,

  },
]