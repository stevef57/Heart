import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

const MobileNavLinks = (props) => {
  const taco = {
    hidden: { y: -300 },
    show: {
      y: 0,
      transition: {
        bounce: 0,
      },
    },
    exit: {
      y: -300,
      transition: {
        delay: 0.1,
        bounce: 0,
      },
    },
  };
  const food = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        delay: 0.15,
        bounce: 0,
      },
    },
    exit: {
      scale: 0,
    },
  };

  return (
    <motion.div
      key="box"
      variants={taco}
      initial="hidden"
      animate="show"
      exit="exit"
      className={styles.navTitleBox}
    >
      <Link href="/videos" className={styles.navTitle}>
        <motion.h1
          key="1"
          variants={food}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={() => {
            props.isMobile && props.forceClosed();
          }}
          className={styles.navTitle}
        >
          videos
        </motion.h1>
      </Link>
      <motion.h1
        key="2"
        variants={food}
        initial="hidden"
        animate="show"
        exit="exit"
        onClick={(e) => {
          props.isMobile && props.forceClosed();
          e.preventDefault();
          window.location.href = "/#latest";
        }}
        className={styles.navTitle}
      >
        latest
      </motion.h1>
      <motion.h1
        key="3"
        variants={food}
        initial="hidden"
        animate="show"
        exit="exit"
        onClick={(e) => {
          e.preventDefault();
          window.open("https://coldheart-media.creator-spring.com/", "_blank");
          props.isMobile && props.forceClosed();
        }}
        className={styles.navTitle}
      >
        shop
      </motion.h1>
      <Link href="/contact">
        <motion.h1
          key="4"
          variants={food}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={() => props.isMobile && props.forceClosed()}
          className={styles.navTitle}
        >
          contact
        </motion.h1>
      </Link>
    </motion.div>
  );
};

export default MobileNavLinks;
