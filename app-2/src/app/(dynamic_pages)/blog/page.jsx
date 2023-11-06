import Image from "next/image";
import styles from "./blog.module.css";
import Link from "next/link";

export const metadata = {
  title: "Products",
  description: "lorem...",
};

const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed To Fetch Data");
  }
  return res.json();
};

const BlogPage = async () => {
  const data = await getData();
  const products = data.products;

  return (
    <section className={styles.blog}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <Link href={`/blog/${product.id}`}>
            <Image
              src={product.thumbnail}
              width={200}
              height={200}
              alt={product.title}
            />
          </Link>

          <Link className={styles.content} href={`/blog/${product.id}`}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default BlogPage;
