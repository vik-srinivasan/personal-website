import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import SectionHeading from '../components/ui/SectionHeading';
import TimelineItem from '../components/ui/TimelineItem';
import FadeInSection from '../components/ui/FadeInSection';
import ContactForm from '../components/ui/ContactForm';
import { education } from '../data/education';
import { experience } from '../data/experience';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <FadeInSection>
      <section className={styles.hero}>
        <img
          src={`${import.meta.env.BASE_URL}images/vik.jpeg`}
          alt="Vikram Srinivasan"
          className={styles.profilePic}
        />
        <div className={styles.heroText}>
          <h1>Hi, I&rsquo;m Vikram Srinivasan</h1>
          <p className={styles.tagline}>Student &mdash; Engineer &mdash; Sports Nerd</p>
          <p>
            I recently graduated with a BS in Symbolic Systems from Stanford and am now
            pursuing an MS in CS. Right now I&rsquo;m obsessed with finding new ways to
            build with AI &mdash; whether that&rsquo;s shipping full-stack apps with
            Claude Code, experimenting with agentic workflows, or just straight-up
            token-maxxing my way through side projects. I believe the best way to
            understand AI is to build relentlessly with it.
          </p>
          <p>
            When I&rsquo;m not vibecoding or studying ML, you&rsquo;ll find me deep in
            basketball analytics or dominating my fantasy football leagues.
          </p>
          <p className={styles.heroLinks}>
            Check out my latest builds on the{' '}
            <Link to="/projects">Projects page</Link> or my sports analytics work
            on the <Link to="/sports">Sports page</Link>.
          </p>
        </div>
      </section>
      </FadeInSection>

      {/* Education & Experience */}
      <section className={styles.timeline}>
        <FadeInSection>
          <div className={styles.timelineInner}>
            <div className={styles.timelineColumn}>
              <h2>Education</h2>
              {education.map((item) => (
                <TimelineItem key={item.title} {...item} />
              ))}
            </div>
            <div className={styles.timelineColumn}>
              <h2>Work Experience</h2>
              {experience.map((item) => (
                <TimelineItem key={item.title + item.subtitle} {...item} />
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Contact */}
      <section id="contact" className={styles.contact}>
        <FadeInSection>
          <SectionHeading>Get In Touch</SectionHeading>
          <div className={styles.socialLinks}>
            <a
              href="https://linkedin.com/in/vikram-srin"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Resume
            </a>
            <a
              href="https://github.com/vik-srinivasan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              GitHub
            </a>
          </div>
          <ContactForm />
        </FadeInSection>
      </section>
    </>
  );
}
