import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = ({ isActive }) =>
    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          Vikram
        </Link>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/sports" className={linkClass} onClick={closeMenu}>
            Sports
          </NavLink>
          <a href="/#contact" className={styles.navLink} onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
