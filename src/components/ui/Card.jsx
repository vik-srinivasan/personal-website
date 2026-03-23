import styles from './Card.module.css';

export default function Card({ title, description, links, tags, featured, image, date }) {
  const cardClass = `${styles.card} ${featured ? styles.cardFeatured : ''}`;

  return (
    <div className={cardClass}>
      {image && (
        <img src={`${import.meta.env.BASE_URL}${image}`} alt={title} className={styles.cardImage} />
      )}
      {date && <p className={styles.cardDate}>{date}</p>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      )}
      {links && links.length > 0 && (
        <div className={styles.linkButtons}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkButton} ${featured ? styles.linkButtonFeatured : ''}`}
            >
              {link.label} &rarr;
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
