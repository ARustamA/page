import { BackgroundCanvas } from "../components/background/Background";

const WelcomeSection = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute flex w-full h-full items-center justify-center">
        <p className="text-2xl lg:text-5xl typingHello">Добро пожаловать</p>
      </div>
      <BackgroundCanvas />
    </div>
  );
};

export { WelcomeSection };
