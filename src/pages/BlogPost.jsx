import { Suspense, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './BlogPost.module.css';
import { blogPosts } from '../data/blogPosts';

const articleComponents = {
  wizards: lazy(() => import('../content/WizardsArticle')),
  'sixers-offseason': lazy(() => import('../content/SixersOffseasonArticle')),
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const ArticleComponent = articleComponents[slug];

  if (!post || !ArticleComponent) {
    return (
      <div className={styles.notFound}>
        <h1>Post not found</h1>
        <p>
          <Link to="/sports">Back to Sports</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Link to="/sports" className={styles.backLink}>
        &larr; Back to Sports
      </Link>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.meta}>
        By {post.author} &middot; {post.date}
      </p>
      <img
        src={post.image}
        alt={post.title}
        className={styles.heroImage}
      />
      <div className={styles.article}>
        <Suspense fallback={<p className={styles.loading}>Loading article...</p>}>
          <ArticleComponent />
        </Suspense>
      </div>
    </div>
  );
}
