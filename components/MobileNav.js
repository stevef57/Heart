import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillVideoCamera } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";
import styles from "../styles/Navbar.module.scss";
import Social from "./Social";
import MobileNavLinks from "./MobileNavLinks";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const menu = (
    <AiOutlineMenu className={styles.burger} onClick={() => setOpen(!open)} />
  );
  const close = (
    <AiOutlineClose className={styles.burger} onClick={() => setOpen(!open)} />
  );
  const forceClosed = () => setOpen(false);
  return (
    <div className={styles.mobileAll}>
      <div className={styles.mobileBox}>
        {open ? close : menu}
        <Link href="/">
          <div onClick={forceClosed} className={styles.logoBox}>
            <img
              className={styles.logo}
              src="./pictures/coldhearttrans.png"
              alt="coldheartmedia 559 fresno the best videographer in fresno merced sanger parlier selma modesto bakersfield"
            />
          </div>
        </Link>
        <AnimatePresence>
          {open && <MobileNavLinks isMobile={true} forceClosed={forceClosed} />}
        </AnimatePresence>
        <Social />
      </div>
      <div className={styles.bottomMenu}>
        <div
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/#latest";
          }}
          className={styles.section}
        >
          <AiFillFire className={styles.bottomIcons} />
          <h1 className="bottomTitle">Latest</h1>
        </div>
        <Link href="videos">
          <div className={styles.section}>
            <AiFillVideoCamera className={styles.bottomIcons} />
            <h1 className="bottomTitle">Videos</h1>
          </div>
        </Link>
        <Link href="/contact">
          <div className={styles.section}>
            <AiFillMail className={styles.bottomIcons} />
            <h1 className="bottomTitle">Contact</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
