import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

const NavLinks = (props) => {
  return (
    <div className={styles.navTitleBox}>
      <Link href="/videos" className={styles.navTitle}>
        <h1
          onClick={() => props.isMobile && props.forceClosed()}
          className={styles.navTitle}
        >
          videos
        </h1>
      </Link>
      <h1
        onClick={(e) => {
          props.isMobile && props.forceClosed();
          e.preventDefault();
          window.location.href = "/#latest";
        }}
        className={styles.navTitle}
      >
        latest
      </h1>
      <h1
        onClick={(e) => {
          e.preventDefault();
          window.open("https://coldheart-media.creator-spring.com/", "_blank");
          props.isMobile && props.forceClosed();
        }}
        className={styles.navTitle}
      >
        shop
      </h1>
      <Link href="/contact">
        <h1
          onClick={() => props.isMobile && props.forceClosed()}
          className={styles.navTitle}
        >
          contact
        </h1>
      </Link>
    </div>
  );
};

export default NavLinks;
