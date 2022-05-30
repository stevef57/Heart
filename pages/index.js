import Head from "next/head";
import Latest from "../components/Latest";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
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
      </Head>
      <div className={styles.whitebox}>
        <div className={styles.heroBox}>
          <div className={styles.heroTop}>
            <Link href="/videos">
              <div className={styles.heroOne}>
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
              <div className={styles.shadow}>
                <h1 className={styles.milly}>Follow Chriz Milly</h1>
              </div>
            </div>
          </div>
          <div className={styles.heroThree}>
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
