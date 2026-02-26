import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xnnzqvar', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className={styles.input}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className={styles.input}
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        required
        className={styles.textarea}
      />
      <input type="text" name="_gotcha" className={styles.honeypot} />

      <button
        type="submit"
        className={styles.button}
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>

      {status === 'success' && (
        <p className={styles.success}>Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className={styles.error}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
