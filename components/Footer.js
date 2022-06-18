import Subscribe from "./subscribe";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerBox}>
      <Subscribe />
      <h1 className={styles.footerTitle}>
        © 2019 - 2022 ColdHeartMedia. All Rights Reserved
      </h1>
    </div>
  );
};

export default Footer;
