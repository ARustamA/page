export const nameAnimation = {
  hidden: {
    x: -300,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
};
export const imgAnimation = {
  hidden: {
    x: -200,
    y: 200,
    opacity: 0
  },
  visible: (custom: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
};

export const formAnimation = {
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

export const cardAnimation = {
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
