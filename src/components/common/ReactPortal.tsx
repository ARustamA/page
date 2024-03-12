import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import type { FC, HTMLAttributes, ReactNode } from 'react';

type IReactPortalProps = {
  children: ReactNode;
  wrapperId: string;
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

function createWrapperAndAppendToBody(wrapperId: string, className?: string) {
  const wrapperElement = document.createElement('div');

  wrapperElement.setAttribute('id', wrapperId);
  wrapperElement.setAttribute('class', className ?? '');
  wrapperElement.style.top = '0';
  wrapperElement.style.left = '0';
  wrapperElement.style.width = '100%';
  wrapperElement.style.height = '100%';
  wrapperElement.style.overflow = 'auto';
  document.body.appendChild(wrapperElement);

  return wrapperElement;
}

const ReactPortal: FC<IReactPortalProps> = ({ children, wrapperId, className }) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId)!;
    let systemCreated = false;

    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId, className);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [className, wrapperId]);

  // wrapperElement state will be null on very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
