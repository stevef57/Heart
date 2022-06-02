import React, { useState } from "react";
import data from "../public/data.js";
import { motion } from "framer-motion";
import styles from "../styles/Cards.module.scss";

const CardsMobile = () => {
  const [noOfElm, setNoOfElm] = useState(3);

  const slice = data.cardData.slice(0, noOfElm);
  const loadMore = () => {
    setNoOfElm(noOfElm + 3);
    setFancy(true);
  };
  const [fancy, setFancy] = useState(false);
  return (
    <div>
      {slice.map((item, index) => {
        const cardImg = {
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
        return (
          <motion.div
            initial={{
              opacity: fancy ? 0 : 1,
              y: fancy ? 100 : 0,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              bounce: 0,
              duration: 0.2,
            }}
            key={item.id}
            onClick={(e) => {
              e.preventDefault();
              window.open(`${item.url}`, "_blank");
            }}
            className={styles.cardsBox}
          >
            <div className={styles.imgBox} style={cardImg}>
              <div className={styles.cardShade}>
                <h1 className={styles.cardTitle}>{item.title}</h1>
                <h1 className={styles.cardDate}>{item.date}</h1>
              </div>
            </div>
          </motion.div>
        );
      })}
      <div onClick={() => loadMore()} className={styles.moreBox}>
        <h1 className={styles.moreTitle}>More</h1>
      </div>
    </div>
  );
};

export default CardsMobile;
