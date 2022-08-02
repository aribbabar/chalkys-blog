import styles from "../styles/Skeleton.module.css";

const Skeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coverImage}></div>
      <div className={styles.author}></div>
      <div className={styles.title}></div>
      <div className={styles.break}></div>
      <div className={styles.body}></div>
    </div>
  );
};

export default Skeleton;
