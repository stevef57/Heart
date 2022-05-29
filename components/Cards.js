import React, { useState } from "react";
import data from "../public/data.js";
import styles from "../styles/Cards.module.scss";

const Cards = () => {
  const [noOfElm, setNoOfElm] = useState(3);

  const slice = data.cardData.slice(0, noOfElm);
  const loadMore = () => {
    setNoOfElm(noOfElm + noOfElm);
  };
  return (
    <div>
      {slice.map((item, index) => {
        const cardImg = {
          backgroundImage: `url(${item.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
        return (
          <div
            key={item.id}
            onClick={(e) => {
              e.preventDefault();
              window.open(`${item.url}`, "_blank");
            }}
            className={styles.cardsBox}
          >
            <div className={styles.imgBox} style={cardImg}>
              <div className={styles.cardShade}></div>
            </div>
            <div className={styles.infoBox}>
              <h1 className={styles.cardTitle}>{item.title}</h1>
              <h1 className={styles.cardDate}>{item.date}</h1>
            </div>
          </div>
        );
      })}
      <div onClick={() => loadMore()} className={styles.moreBox}>
        <h1 className={styles.moreTitle}>More</h1>
      </div>
    </div>
  );
};

export default Cards;
