import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import SectionHeading from '../components/ui/SectionHeading';
import TimelineItem from '../components/ui/TimelineItem';
import FadeInSection from '../components/ui/FadeInSection';
import ContactForm from '../components/ui/ContactForm';
import { education } from '../data/education';
import { experience } from '../data/experience';

const rotatingWords = ['Builder', 'Sports Nerd', 'Experimenter', 'Student'];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [wordFade, setWordFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordFade(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setWordFade(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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
          <p className={styles.tagline}>
            <span className={`${styles.rotatingWord} ${wordFade ? styles.rotatingWordVisible : ''}`}>
              {rotatingWords[wordIndex]}
            </span>
          </p>
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

      {/* What I'm Working On */}
      <div className={styles.workingOnWrapper}>
      <FadeInSection>
        <section className={styles.workingOn}>
          <h2>What I&rsquo;m Working On</h2>
          <p className={styles.workingOnSubtitle}>Things in progress or on my mind right now.</p>
          <div className={styles.statusList}>
            <div className={styles.statusItem}>
              <span className={styles.statusDot + ' ' + styles.statusActive} />
              <div>
                <span className={styles.statusLabel}>&ldquo;Sixth Man&rdquo; AI Assistant</span>
                <span className={styles.statusDesc}>&mdash; personal AI tool, safer and more tailored than OpenClaw</span>
              </div>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusDot + ' ' + styles.statusActive} />
              <div>
                <span className={styles.statusLabel}>AI Research Agent</span>
                <span className={styles.statusDesc}>&mdash; automated lead discovery at Cartesia</span>
              </div>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusDot + ' ' + styles.statusActive} />
              <div>
                <span className={styles.statusLabel}>Sports Decision Tools</span>
                <span className={styles.statusDesc}>&mdash; fantasy drafts, brackets, player evaluation</span>
              </div>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusDot + ' ' + styles.statusActive} />
              <div>
                <span className={styles.statusLabel}>Workflow Automations</span>
                <span className={styles.statusDesc}>&mdash; small AI tools that save hours on repetitive tasks</span>
              </div>
            </div>
            <div className={styles.statusDivider} />
            <div className={styles.statusItem}>
              <span className={styles.statusDot + ' ' + styles.statusIdea} />
              <div>
                <span className={styles.statusLabel}>Real-time NBA trade &amp; cap simulator</span>
                <span className={styles.statusDesc}>&mdash; fan-facing product for trade deadline season</span>
              </div>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusDot + ' ' + styles.statusIdea} />
              <div>
                <span className={styles.statusLabel}>AI scouting workflows</span>
                <span className={styles.statusDesc}>&mdash; synthesizing film, stats, and medical data for front offices</span>
              </div>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusDot + ' ' + styles.statusIdea} />
              <div>
                <span className={styles.statusLabel}>Content creation automations</span>
                <span className={styles.statusDesc}>&mdash; transcription, formatting, publishing pipelines</span>
              </div>
            </div>
            <div className={styles.statusItem}>
              <span className={styles.statusDot + ' ' + styles.statusIdea} />
              <div>
                <span className={styles.statusLabel}>AI experiment tracker</span>
                <span className={styles.statusDesc}>&mdash; logging what models, prompts, and parameters actually worked</span>
              </div>
            </div>
          </div>
          <div className={styles.statusLegend}>
            <span><span className={styles.legendDot + ' ' + styles.statusActive} /> Building</span>
            <span><span className={styles.legendDot + ' ' + styles.statusIdea} /> Thinking about</span>
          </div>
        </section>
      </FadeInSection>
      </div>

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
      <div className={styles.contactWrapper}>
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
      </div>
    </>
  );
}
