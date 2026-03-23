import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import FadeInSection from '../components/ui/FadeInSection';
import { techBlogPosts } from '../data/techBlogPosts';

export default function Blog() {
  const [featured, ...rest] = techBlogPosts;

  return (
    <div className={styles.page}>
      <FadeInSection>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Thoughts
          </h1>
          <hr className={styles.heroDivider} />
          <p className={styles.heroSubtitle}>
            Tech deep dives, AI experiments, and whatever else is on my mind.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <p className={styles.subtitle}>Latest</p>
        <div className={styles.blogGrid}>
          <div className={styles.featuredPost}>
            <Link to={`/blog/${featured.slug}`} className={styles.blogCard}>
              <img
                src={`${import.meta.env.BASE_URL}${featured.image}`}
                alt={featured.title}
                className={styles.blogCardImage}
              />
              <div className={styles.blogCardBody}>
                <span className={styles.featuredTag}>Featured</span>
                <p className={styles.blogCardDate}>{featured.date}</p>
                <h3 className={styles.blogCardTitle}>{featured.title}</h3>
                <p className={styles.blogCardExcerpt}>{featured.excerpt}</p>
              </div>
            </Link>
          </div>
          {rest.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={styles.blogCard}
            >
              <img
                src={`${import.meta.env.BASE_URL}${post.image}`}
                alt={post.title}
                className={styles.blogCardImage}
              />
              <div className={styles.blogCardBody}>
                <p className={styles.blogCardDate}>{post.date}</p>
                <h3 className={styles.blogCardTitle}>{post.title}</h3>
                <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
