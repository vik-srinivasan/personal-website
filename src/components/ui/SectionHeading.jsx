const style = {
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 800,
  marginBottom: '3rem',
  color: 'var(--color-text)',
};

export default function SectionHeading({ children }) {
  return <h2 style={style}>{children}</h2>;
}
