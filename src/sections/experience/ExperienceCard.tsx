import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IExperience } from '../../assets/constants/types';

export const ExperienceCard = ({ experience }: { experience: IExperience }) => {
  const { company_name, date, icon: Icon, iconBg, points, title, tools } = experience;
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        opacity: '80%',
        color: '#fff',
        borderRadius: '20px'
      }}
      contentArrowStyle={{ borderRight: '7px solid  #CEFDFF' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={<Icon />}>
      <div className="">
        <h3 className="text-main-blue text-2xl font-bold">{title}</h3>
        <p className="text-secondary text-lg font-semibold">{company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2  ">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-sm pl-1 tracking-wider ">
            {point}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap">
        {tools.map((point, index) => (
          <span
            key={`experience-point-${index}`}
            className="text-main_red text-[14px] pl-1 tracking-wider
            hover:text-main-blue transition-all duration-200 cursor-none
            ">
            {`#${point}`}
          </span>
        ))}
      </div>
    </VerticalTimelineElement>
  );
};
