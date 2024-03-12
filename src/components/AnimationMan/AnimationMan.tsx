import styles from './animationMan.module.css';

export const AnimationMan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.error404page}>
        <div className={styles.newcharacter404}>
          <div className={styles.chair404}></div>
          <div className={styles.leftshoe404}></div>
          <div className={styles.rightshoe404}></div>
          <div className={styles.legs404}></div>
          <div className={styles.torso404}>
            <div className={styles.body404}></div>
            <div className={styles.leftarm404}></div>
            <div className={styles.rightarm404}></div>
            <div className={styles.head404}>
              <div className={styles.eyes404}></div>
            </div>
          </div>
          <div className={styles.laptop404}></div>
        </div>
      </div>
    </div>
  );
};
