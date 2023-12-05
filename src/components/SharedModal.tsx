import type { Dispatch, FC, SetStateAction } from 'react';

import { ReactComponent as Telegram } from '../assets/icons/Telegram.svg';
import { ReactComponent as WhatsApp } from '../assets/icons/WhatsApp.svg';
import { ReactComponent as Close } from '../assets/icons/Close.svg';
import { ReactComponent as Gmail } from '../assets/icons/gmail.svg';
import { ReactComponent as Vk } from '../assets/icons/vk.svg';
import { Modal } from './common';

type IProps = {
  sharedModal: boolean;
  setSharedModal: Dispatch<SetStateAction<boolean>>;
};
type CardProps = {
  shareUrl: string;
  icon: FC<{ className: string }>;
};

const SharedCard = ({ shareUrl, icon: Icon }: CardProps) => {
  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noreferrer"
      className="grid items-center justify-center p-4 shadow shadow-main_blue
      hover:shadow-inner hover:shadow-blue-light  border rounded-full transition-all
        text-text_dark  hover:text-blue-light">
      {<Icon className={`sm:w-9`} />}
    </a>
  );
};

export const SharedModal = ({ sharedModal, setSharedModal }: IProps) => {
  const urlTelegram = `https://t.me/RustamAkhm`;
  const whatsappUrl = `whatsapp://send?phone=+77476085495&text=Привет😉 Меня зовут`;
  const vkontakteUrl = `https://vk.com/share.php?url=arstm&title=${encodeURIComponent(`Привет 😉 Меня зовут`)}`;
  const gmailUrl = `mailto:rakhmetyanov@gmail.com?subject=${encodeURIComponent('Привет 😉')}&body=Привет 😉 Меня зовут`;

  return (
    <Modal
      modalId="sharedModal"
      isOpenModal={sharedModal}
      setIsOpenModal={setSharedModal}
      className="bg-indigo-900   
        !top-1/2 !left-1/2 !bottom-auto !-translate-x-1/2 !-translate-y-1/2  
        border grid gap-5 !rounded-lg">
      <div className="flex items-center justify-between pb-3">
        <span className="text-lg italic">Напишите мне ❤️</span>
        <button onClick={() => setSharedModal(false)}>
          <Close className="cursor-pointer " />
        </button>
      </div>
      <div className=" flex gap-3 items-center justify-center flex-wrap">
        <SharedCard shareUrl={urlTelegram} icon={Telegram} />
        <SharedCard shareUrl={whatsappUrl} icon={WhatsApp} />
        <SharedCard shareUrl={gmailUrl} icon={Gmail} />
        <SharedCard shareUrl={vkontakteUrl} icon={Vk} />
        {/* <SharedCard shareUrl={twitterUrl} icon={Twitter} /> */}
      </div>
    </Modal>
  );
};
