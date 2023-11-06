import { Passion_One } from "next/font/google";
import styles from "./page.module.css";
import Image from "next/image";
import ziadImage from "@/../images/zoz.jpg";

// Google font
const font = Passion_One({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function Home() {
  return (
    <section>
      {/* Fonts */}
      <div className={font.className}>
        <h1 className={`${styles.heading} ${styles.ziad} className`}>Ziad</h1>
      </div>

      {/* Images */}
      <Image src={ziadImage} width={200} height={200} alt="Ziad Image" />

      {/* Externl Images => next.config.js */}
      <Image
        src="https://images.ctfassets.net/hrltx12pl8hq/2tGpIfjc16t14wJf4BG2Nr/66423e8cb5679d1c54d04781cf3da98a/3d-render-image-01.jpg"
        width={200}
        height={200}
        alt="External Image"
      />

      {/* Text Colored => CSS */}
      <h1 className={styles.coloredText}>
        Hello I'm Ziad Ahmed <br />
        I'm From Egypt <br />
        I'm 24 Years Old
      </h1>
    </section>
  );
}
