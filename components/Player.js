import styles from "../styles/Player.module.scss";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const Player = (props) => {
  const { id, playing } = props;

  const url = `https//www.youtube.com/watch?v=${id}`;
  return (
    <div className={styles.playerBox}>
      <ReactPlayer
        controls={true}
        className={styles.ReactPlayer}
        url={url}
        playing={playing}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Player;
