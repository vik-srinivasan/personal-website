import { Link } from 'react-router-dom';
import styles from './Sports.module.css';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import FadeInSection from '../components/ui/FadeInSection';
import { sportsProjects } from '../data/sportsProjects';
import { blogPosts } from '../data/blogPosts';

export default function Sports() {
  return (
    <div className={styles.page}>
      <SectionHeading>Sports</SectionHeading>

      <FadeInSection>
        <p className={styles.subtitle}>Projects</p>
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

      <FadeInSection>
        <p className={styles.subtitle}>Thoughts &amp; Blog</p>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/sports/${post.slug}`}
              className={styles.blogCard}
            >
              <img
                src={post.image}
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
