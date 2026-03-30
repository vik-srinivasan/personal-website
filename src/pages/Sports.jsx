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
            Sports Thoughts
          </h1>
          <hr className={styles.heroDivider} />
          <p className={styles.heroSubtitle}>
            This is where I write about sports as both a fan and a builder.
            Some of it&rsquo;s analysis, some of it&rsquo;s opinion, and most of it
            is me caring way too much about things that don&rsquo;t matter.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <p className={styles.subtitle}>Projects</p>
        <div className={styles.projectsGrid}>
          {sportsProjects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              links={project.links}
              image={project.image}
              date={project.date}
            />
          ))}
        </div>
      </FadeInSection>

      <FadeInSection>
        <p className={styles.subtitle} style={{ marginTop: '5rem' }}>Writing</p>
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
    </div>
  );
}
