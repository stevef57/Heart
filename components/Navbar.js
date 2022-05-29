import styles from "../styles/Navbar.module.scss";
import NavLinks from "../components/NavLinks.js";
import Link from "next/link";
import Social from "./Social";
const Navbar = () => {
  return (
    <div className={styles.navbox}>
      <Link href="/" className={styles.logoBox}>
        <div className={styles.logoBox}>
          <img
            className={styles.logo}
            src="./pictures/coldhearttrans.png"
            alt="coldheartmedia 559 fresno the best videographer in fresno merced sanger parlier selma modesto bakersfield"
          />
        </div>
      </Link>
      <NavLinks />
      <Social />
    </div>
  );
};

export default Navbar;
