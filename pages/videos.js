import Player from "../components/Player";
import styles from "../styles/Videos.module.scss";
import Image from "next/image";
import ScrollContainer from "react-indiana-drag-scroll";
import Head from "next/head";
import { useState } from "react";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export default function Videos({ results }) {
  const [currentVideo, setCurrentVideo] = useState(results[3]);
  const [playing, setPlaying] = useState(false);
  return (
    <div className={styles.videos}>
      <Head>
        <title>Videos</title>
        <meta
          name="description"
          content="Check out the latest videos from ColdHeartMedia"
        />
      </Head>
      <div className={styles.white}>
        <div className={styles.playerSize}>
          <Player
            id={currentVideo.snippet.resourceId.videoId}
            playing={playing}
          />
        </div>
        <ScrollContainer
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
                      src={video.snippet.thumbnails.maxres.url}
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
