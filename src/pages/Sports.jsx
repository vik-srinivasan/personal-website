import { Link } from 'react-router-dom';
import styles from './Sports.module.css';
import FadeInSection from '../components/ui/FadeInSection';
import Card from '../components/ui/Card';
import { sportsProjects } from '../data/sportsProjects';
import { blogPosts } from '../data/blogPosts';

export default function Sports() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className={styles.page}>
      <FadeInSection>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            The <span className={styles.heroAccent}>Press Box</span>
          </h1>
          <hr className={styles.heroDivider} />
          <p className={styles.heroSubtitle}>
            Analysis, opinion, and deep dives on the NBA, NFL, and college
            basketball. Written by someone who cares too much about this stuff.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <p className={styles.subtitle}>Latest</p>
        <div className={styles.blogGrid}>
          <div className={styles.featuredPost}>
            <Link to={`/sports/${featured.slug}`} className={styles.blogCard}>
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
              to={`/sports/${post.slug}`}
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

      <FadeInSection>
        <p className={styles.subtitle} style={{ marginTop: '5rem' }}>Projects</p>
        <div className={styles.projectsGrid}>
          {sportsProjects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              href={project.url}
              image={project.image}
              date={project.date}
            />
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
