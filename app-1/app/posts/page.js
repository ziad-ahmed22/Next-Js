import Link from "next/link";

export const metadata = {
  title: "Posts",
};

const PostsPage = () => {
  return (
    <div>
      <h1>PostsPage</h1>
      <div style={{ marginTop: "15px" }}>
        <Link href="/posts/1" style={{ textDecoration: "underLine" }}>
          Post Details
        </Link>
      </div>
    </div>
  );
};

export default PostsPage;
