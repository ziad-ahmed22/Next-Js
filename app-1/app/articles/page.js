"use client";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Articles",
};

const ArticlesPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>ArticlesPage</h1>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default ArticlesPage;
