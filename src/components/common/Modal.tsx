import { useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import type { Dispatch, FC, HTMLAttributes, ReactNode, SetStateAction } from 'react';

import ReactPortal from './ReactPortal';

import { usePrevious } from '../../utils/hooks/usePrevious';

type Props = {
  children: ReactNode;
  isOpenModal: boolean;
  modalId: string;
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

export const Modal: FC<Props> = ({ children, isOpenModal, setIsOpenModal, className, modalId }) => {
  const nodeRef = useRef(null);
  const prevIsOpen = usePrevious(isOpenModal);
  // const controls = useAnimation();

  const handleClose = useCallback(async () => {
    // await controls.start('hidden');
    setIsOpenModal(false);
  }, [setIsOpenModal]);

  useEffect(() => {
    if (prevIsOpen && !isOpenModal) {
      handleClose();
    }
  }, [handleClose, isOpenModal, prevIsOpen]);

  useEffect(() => {
    const closeOnEscapeKey = (e: any) => (e.key === 'Escape' ? handleClose() : null);

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpenModal) {
    return null;
  }

  return (
    <ReactPortal wrapperId={`${modalId}`} className="scrollbars">
      <div
        role="presentation"
        className="fixed  z-10  backdrop-filter backdrop-blur-sm 
         lg:backdrop-blur-md inset-0 max-h-screen "
        onClick={handleClose}
        ref={nodeRef}></div>
      <div className="flex p-4 ">
        <motion.div
          ref={nodeRef}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.3 }}
          dragConstraints={{ bottom: 0 }}
          dragElastic={0.2}
          className={`p-4 sm:p-5  sm:rounded-2xl z-10 overflow-auto 
        fixed w-full left-0 top-auto bottom-0 min-h-[10vh] max-h-[90vh]
        sm:!top-1/2 sm:!left-1/2 sm:!bottom-auto sm:!-translate-x-1/2 sm:!-translate-y-1/2 max-w-sm
        sm:max-w-screen-sm 
        ${className}`}>
          {children}
        </motion.div>
      </div>
    </ReactPortal>
  );
};
