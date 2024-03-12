export const statAnimation = {
  hidden: {
    y: -300,
    opacity: 0,
    // scale: 0

  },
  visible: () => ({
    y: 0,

    opacity: 1,
    // scale: 1,
    transition: { delay: 0.5 }
  })
};
export const languageAnimation = {
  hidden: {
    y: 100,
    // opacity: 0,
    scale: 0
  },
  visible: (custom: number) => ({
    y: 0,
    // opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2 }
  })
};
export const reactAnimation = {
  hidden: {
    x: 1000,
    rotate: 720,
  },
  visible: (custom: number) => ({
    x: 0,

    rotate: 0,
    transition: {
      delay: custom * 0.2,
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  }),
};

export const toolsAnimation = {
  hidden: {
    y: 200,
    x: -400,
    opacity: 0,
    // scale: 0
  },
  visible: (custom: number) => ({
    y: 0,
    x: 0,
    opacity: 1,
    // scale: 1,
    transition: { delay: custom * 0.2 }
  })
};
export const styleAnimation = {
  hidden: {
    x: -1000,
    rotate: -720,
  },
  visible: (custom: number) => ({
    x: 0,

    rotate: 0,
    transition: {
      delay: custom * 0.2,
      type: 'spring',
      stiffness: 300,
      damping: 25,
    },
  }),
};
export const tools2Animation = {
  hidden: {
    y: 100,
    x: 100,
    opacity: 0,
    // scale: 0
  },
  visible: (custom: number) => ({
    y: 0,
    x: 0,
    opacity: 1,
    // scale: 1,
    transition: { delay: custom * 0.2 }
  })
};