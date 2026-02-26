import styles from './Projects.module.css';
import SectionHeading from '../components/ui/SectionHeading';
import Card from '../components/ui/Card';
import FadeInSection from '../components/ui/FadeInSection';
import { projects } from '../data/projects';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className={styles.page}>
      <SectionHeading>Projects</SectionHeading>

      <FadeInSection>
        <p className={styles.subtitle}>Latest Work</p>
        <div className={styles.featuredGrid}>
          {featured.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              href={project.url}
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
              href={project.url}
              tags={project.tags}
            />
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}
