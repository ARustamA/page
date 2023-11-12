import { useEffect, useState } from "react";
import { ReactComponent as Scroll } from './../../assets/icons/scroll.svg';

export const ScrollMouse = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const showAndHide = () => {
      // Показать компонент
      setShowScroll(true);

      // Установить таймер на скрытие через 10 секунд
      const hideTimer = setTimeout(() => {
        setShowScroll(false);
      }, 15000);

      return () => {
        // Очистить таймер на скрытие при размонтировании компонента
        clearTimeout(hideTimer);
      };
    };

    // Запустить showAndHide через 3 секунды
    const initialTimer = setTimeout(() => {
      showAndHide();
    }, 3000);

    // Установить интервал для периодического вызова showAndHide каждую минуту
    const interval = setInterval(() => {
      showAndHide();
    }, 60000); // 60000 миллисекунд = 1 минута

    // Очистить таймеры и интервал при размонтировании компонента
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return showScroll ? (
    <Scroll className="absolute bottom-3 right-5 animate-bounce w-10 h-16" />
  ) : null;
};
