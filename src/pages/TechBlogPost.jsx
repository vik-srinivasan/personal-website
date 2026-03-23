import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './TechBlogPost.module.css';
import { techBlogPosts } from '../data/techBlogPosts';

const markdownFiles = import.meta.glob('../content/tech/*.md', {
  query: '?raw',
  import: 'default',
});

export default function TechBlogPost() {
  const { slug } = useParams();
  const post = techBlogPosts.find((p) => p.slug === slug);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key = `../content/tech/${slug}.md`;
    if (markdownFiles[key]) {
      markdownFiles[key]().then((text) => {
        setContent(text);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post not found</h1>
        <p>
          <Link to="/blog">Back to Blog</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Link to="/blog" className={styles.backLink}>
        &larr; Back to Blog
      </Link>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>
        By {post.author} &middot; {post.date}
      </p>
      {post.image && (
        <img
          src={`${import.meta.env.BASE_URL}${post.image}`}
          alt={post.title}
          className={styles.heroImage}
        />
      )}
      <div className={styles.article}>
        {loading ? (
          <p className={styles.loading}>Loading article...</p>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node, ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
