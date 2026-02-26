import styles from './Card.module.css';

export default function Card({ title, description, href, tags, featured, image, date }) {
  const cardClass = `${styles.card} ${featured ? styles.cardFeatured : ''}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      {image && (
        <img src={image} alt={title} className={styles.cardImage} />
      )}
      {date && <p className={styles.cardDate}>{date}</p>}
      <h3 className={styles.title}>
        {title}
        <span className={styles.arrow}>&rarr;</span>
      </h3>
      <p className={styles.description}>{description}</p>
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}
    </a>
  );
}
