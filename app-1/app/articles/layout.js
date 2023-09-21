import Link from "next/link";

export default function ArticlesLayout({ children }) {
  return (
    <div className="article-layout">
      <div className="article-nav">
        <Link className="active" href="/articles">
          Articles Page
        </Link>
        <Link href="/articles/education">Education Articles</Link>
        <Link href="/articles/sports">Sports Articles</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
