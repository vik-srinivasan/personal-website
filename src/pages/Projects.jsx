import styles from './Projects.module.css';
import Card from '../components/ui/Card';
import FadeInSection from '../components/ui/FadeInSection';
import { projects } from '../data/projects';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className={styles.page}>
      <FadeInSection>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>Projects</h1>
          <hr className={styles.heroDivider} />
          <p className={styles.heroSubtitle}>
            Things I&rsquo;ve built &mdash; from AI tools and full-stack apps
            to research experiments and weekend hacks.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection>
        <p className={styles.subtitle}>Featured</p>
        <div className={styles.featuredGrid}>
          {featured.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              links={project.links}
              tags={project.tags}
              featured
            />
          ))}
        </div>
      </FadeInSection>

      <FadeInSection>
        <p className={styles.subtitle}>All Projects</p>
        <div className={styles.allGrid}>
          {rest.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              links={project.links}
              tags={project.tags}
            />
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
