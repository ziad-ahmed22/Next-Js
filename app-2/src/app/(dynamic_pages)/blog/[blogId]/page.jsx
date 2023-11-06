import Image from "next/image";
import styles from "./blogId.module.css";

// Fetching data
const getData = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  console.log(res);
  if (!res.ok) {
    console.log("Failed To Fetch Data");
  }
  return res.json();
};

// Generate metadata
export const generateMetadata = async ({ params }) => {
  const product = await getData(params.blogId);
  return {
    title: product.title,
    description: product.description,
  };
};

// Page
const page = async ({ params }) => {
  const product = await getData(params.blogId);

  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>{product.title}</h1>
      <h4 className={styles.desc}>{product.description}</h4>
      <div className={styles.imgCon}>
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill={true}
          // fill to nrearest position relative element
          // no need to width height
        />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default page;

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius ametn obis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecat libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores nequ perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius ametn obis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecat libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores nequ perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur obcaecati libero eos nulla modi voluptas. Dolores neque perferendis, reiciendis eius amet nobis minima in aliquam porro voluptas id enim aspernatur.";
