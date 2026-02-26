import styles from './TimelineItem.module.css';

export default function TimelineItem({ date, title, subtitle, description }) {
  return (
    <div className={styles.item}>
      <p className={styles.date}>{date}</p>
      <h3 className={styles.title}>{title}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <p className={styles.description}>{description}</p>
    </div>
  );
}
