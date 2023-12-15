import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '../../assets/constants/constants';
import { ExperienceCard } from './ExperienceCard';

export const WorkTimeLine = () => {
  return (
    <div className="flex flex-col flex-1 gap-3">
      {/* <div className="flex flex-col sm:flex-row justify-between gap-1">
        <div className="grid">
          <p className="text-main-blue indent-3 ">Волонтерство, проект "Касание"</p>
          <strong>Frontend-разработчик</strong>
          <p className="text-xs">Декабря 2023 — по н.в.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <span>JavaScript</span>
          <span>React</span>
          <span>Firebase</span>
          <span>VK-UI</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-1">
        <div className="grid">
          <p className="text-main-blue indent-3 ">HIT Kazakstan</p>
          <strong>Frontend-разработчик</strong>
          <p className="text-xs">Февраль 2023 — по Н.В.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <span>TypeScript</span>
          <span>React</span>
          <span>Redux Toolkit</span>
          <span>REST API</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-1">
        <div className="grid">
          <p className="text-main-blue indent-3 ">21tech</p>
          <strong>Intern fronted разработчик</strong>
          <p className="text-xs">Ноябрь 2022 — Февраль 2023</p>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <span>TypeScript</span>
          <span>React</span>
          <span>REST API</span>
          <span>WebSocket</span>
        </div>
      </div> */}
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};
