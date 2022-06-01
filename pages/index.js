import Head from "next/head";
import Latest from "../components/Latest";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import gif from "../public/pictures/hero.gif";
import hero2 from "../public/pictures/milly.jpg";
import hero3 from "../public/pictures/news.png";
export default function Home() {
  return (
    <div className={styles.whiteboxBox}>
      <Head>
        <title>ColdHeartMedia</title>
        <meta
          name="description"
          content="ColdHeartMedia, shooting videos in California. Videographer, Fresno, LA, San Francisco music videos special events"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#181818" />
      </Head>
      <div className={styles.whitebox}>
        <div className={styles.heroBox}>
          <div className={styles.heroTop}>
            <Link href="/videos">
              <div className={styles.heroOne}>
                <Image
                  className={styles.gif}
                  src={gif}
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
                <div className={styles.shadow}>
                  <h1 className={styles.heroTitleOne}>
                    Making Movies in california
                  </h1>
                  <h1 className={styles.heroTitleTwo}>1,000,000 +</h1>
                  <h1 className={styles.heroTitleThree}>Views</h1>
                </div>
              </div>
            </Link>
            <div
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://distrokid.com/hyperfollow/chrizmilly/about-us-feat-bijan",
                  "_blank"
                );
              }}
              className={styles.heroTwo}
            >
              <Image
                src={hero2}
                layout="fill"
                objectFit="cover"
                priority={true}
              />
              <div className={styles.shadow}>
                <h1 className={styles.milly}>Follow Chriz Milly</h1>
              </div>
            </div>
          </div>
          <div
            className={styles.heroThree}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.youtube.com/watch?v=pmhQ0idHdPE",
                "_blank"
              );
            }}
          >
            <Image src={hero3} layout="fill" objectFit="cover" />
            <div className={styles.shadow}>
              <h1 className={styles.news}>
                Bankroll RaeDoe hits a million views
              </h1>
            </div>
          </div>
        </div>
        <Latest styles={styles} />
      </div>
    </div>
  );
}
