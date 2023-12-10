import { TCard } from './Skills';

export const renderCard = ({ id,  title, icon: Icon, }: TCard) => {
  return (
    <div id={id} key={id} 
      className='w-32 h-32 flex flex-col gap-1 items-center justify-center 
      border p-2 sm:p-4 rounded-full shadow-main-blue shadow-inner hover:shadow-main_red'>
      <Icon />
      <span>{title}</span>
    </div>
  );
};
