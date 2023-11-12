

const ITEMS = ['ОБО МНЕ', 'НАВЫКИ', 'ОПЫТ', 'РЕЗЮМЕ', 'ПОРТФОЛИО','КОНТАКТЫ' ];
const buttonStyle = ` hover:text-main_red whitespace-nowrap`;

export const Header = () => {
  return (
    <header
      className={`h-16 bg-black999  flex items-center justify-between 
       px-4 sm:px-16 py-4 gap-5 sticky top-0 left-0 `}>
      <button className="cursor-cell text-xs sm:text-lg">${'{_ARSTM}'}</button>

      <nav className="text-[8px] sm:text-xs flex flex-wrap items-center gap-3 sm:gap-5 cursor-cell whitespace-nowrap">
      {ITEMS.map((item, index) => (
        <button className={buttonStyle} key={index}>
          {item}
        </button>
      ))}
      </nav>
    </header>
  );
};
