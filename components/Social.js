import { GrInstagram } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";
import styles from "../styles/Navbar.module.scss";

const Social = () => {
  return (
    <div className={styles.social}>
      <GrInstagram
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://www.instagram.com/coldheartmediastudios/";
        }}
        className={styles.insta}
      />
      <AiOutlineYoutube
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://www.youtube.com/channel/UCkLWD-9aQ0okU-tEPdEEnvQ";
        }}
        className={styles.youtube}
      />
    </div>
  );
};

export default Social;
