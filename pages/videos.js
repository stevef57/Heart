import Player from "../components/Player";
import styles from "../styles/Videos.module.scss";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import Head from "next/head";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { useState, useRef, useEffect } from "react";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Videos({ results }) {
  const [currentVideo, setCurrentVideo] = useState(results[3]);
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  const slide = (shift) => {
    ref.current.container.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(
        ref.current.container.current.scrollWidth -
          ref.current.container.current.scrollLeft
      ) <= ref.current.container.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const scrollCheck = () => {
    setscrollX(ref.current.container.current.scrollLeft);
    if (
      Math.floor(
        ref.current.container.current.scrollWidth -
          ref.current.container.current.scrollLeft
      ) <= ref.current.container.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  return (
    <div className={styles.videos}>
      <Head>
        <title>Videos</title>
        <meta
          name="description"
          content="Check out the latest videos from ColdHeartMedia"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#181818" />
      </Head>
      <div className={styles.white}>
        <div className={styles.playerSize}>
          <Player
            id={currentVideo.snippet.resourceId.videoId}
            playing={playing}
          />
        </div>
        <ScrollContainer
          ref={ref}
          onScroll={scrollCheck}
          nativeMobileScroll={true}
          hideScrollbars={false}
          vertical={false}
          className={styles.videosGallery}
        >
          {results &&
            results.map((video) => {
              return (
                <div className={styles.videoCard} key={video.id}>
                  <div
                    className={styles.videoImg}
                    onClick={() => {
                      setCurrentVideo(video);
                      setPlaying(true);
                      scrollTop();
                    }}
                  >
                    <Image
                      src={
                        video.snippet.thumbnails.maxres?.url ||
                        video.snippet.thumbnails.high.url
                      }
                      width={1280}
                      height={720}
                      alt={video.snippet.title}
                    />
                  </div>
                  <h1 className={styles.videoTitle}>{video.snippet.title}</h1>
                </div>
              );
            })}
        </ScrollContainer>
        {scrollX !== 0 && (
          <AiFillLeftCircle
            onClick={() => slide(-450)}
            className={styles.left}
          />
        )}
        {!scrolEnd && (
          <AiFillRightCircle
            onClick={() => slide(450)}
            className={styles.right}
          />
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const myPlaylist = process.env.YOUTUBE_PLAYLIST_ID;
  const API_Key = process.env.YOUTUBE_API_KEY;
  const requestURL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${myPlaylist}&key=${API_Key}&maxResults=50`;

  const response = await fetch(requestURL);
  const results = await response.json();

  return {
    props: { results: results.items },
    revalidate: 10,
  };
}
