import type { Dispatch, FC, SetStateAction } from 'react';

import { Slider } from './Slider';

import { ReactComponent as Close } from '@/assets/icons/Arrow_Right4.svg';
import { Modal } from './common';

type IProp = {
  isOpenModal: boolean;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  data: {
    link: string;
  }[];
};
export const FullSliderImage: FC<IProp> = ({ isOpenModal, setIsOpenModal, data }) => {
  return (
    <Modal
      isOpenModal={isOpenModal}
      setIsOpenModal={setIsOpenModal}
      modalId="sliderFullScreen"
      className=" !max-w-6xl h-dvh flex items-center justify-center ">
      <div className="relative w-full max-w-5xl h-[70vh] max-h-[70vh]">
        <button
          className="hidden sm:flex items-center justify-center 
          bg-slate-500 bg-opacity-50 p-2 hover:bg-opacity-75
        rounded-full absolute right-0 z-50"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpenModal(false);
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            setIsOpenModal(false);
          }}>
          <Close size={20} />
        </button>

        <Slider data={data} isFull={true} />
      </div>
    </Modal>
  );
};
