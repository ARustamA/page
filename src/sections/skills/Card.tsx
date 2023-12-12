import { TCard } from './Skills';

export const renderCard = ({ id,  title, icon: Icon, }: TCard) => {
  return (
    <div id={id} key={id} 
      className={`lg:w-32 lg:h-32 flex flex-col gap-1 items-center justify-center 
      border p-2 sm:p-4 rounded-full shadow-main-blue shadow-inner cursor-pointer
      hover:scale-125 hover:shadow-main_red hover:text-main_red transition-all duration-200 ease-in-out
      ${title === 'React'}`}>
      <Icon className=''/>
      <span className='text-center text-xs hidden lg:block'>{title}</span>
    </div>
  );
};
