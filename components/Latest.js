import styles from "../styles/Latest.module.scss";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Cards = dynamic(() => import("./Cards"));
const CardsMobile = dynamic(() => import("./CardsMobile"));

const Latest = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 700) {
      setShow(true);
    } else {
      setShow(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 700) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className={styles.latest}>
      <div className={styles.latestBox}>
        <h1 className={styles.latestTitle} id="latest">
          Latest
        </h1>
      </div>
      {show ? <Cards /> : <CardsMobile />}
    </div>
  );
};

export default Latest;
