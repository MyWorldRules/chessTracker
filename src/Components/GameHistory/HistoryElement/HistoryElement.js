import React from "react";
import styles from "./HistoryElement.module.css";

function HistoryElement({ isUser, name, date, color, isClicked }) {
  if (isUser === "draw") {
    console.log(isClicked);
    return (
      <div className={styles.draw + " " + (isClicked ? styles.clicked : "")}>
        <h1 className={styles.nameWin}>Draw</h1>
        <div className={styles.bottomText}>
          <h3>{date}</h3>
          <h3>Draw Game</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={
          (isUser === "user" ? styles.userWin : styles.opponentWin) +
          " " +
          (isClicked ? styles.clicked : "")
        }
      >
        <h1 className={styles.nameWin}>{name} Win</h1>
        <div className={styles.bottomText}>
          <h3>{date}</h3>
          <h3>Won as {color}</h3>
        </div>
      </div>
    );
  }
}

export default HistoryElement;
