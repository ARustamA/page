import { VerticalTimeline } from 'react-vertical-timeline-component';
import { experiences } from '../../assets/constants/constants';
import { ExperienceCard } from './ExperienceCard';

export const WorkTimeLine = () => {
  return (
    <div className="flex flex-col flex-1 gap-3">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};
