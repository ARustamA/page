import Typewriter from 'typewriter-effect';
import { ReactComponent as ChevronLeft } from '@/assets/icons/ChevronLeft.svg';

function Typing() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm a Front-end Developer",
          "I'm a Freelancer",
          'I build Websites',
          'I solve Problems'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        // delay: 50,

      }}
    />
  );
}

export default Typing;
