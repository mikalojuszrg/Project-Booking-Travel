import styles from "./BackgroundWrapper.module.scss";

const BackgroundWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__div}> {children}</div>
    </div>
  );
};

export default BackgroundWrapper;
