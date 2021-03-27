import React from "react";
import styles from "./HistoryElement.module.css";
function HistoryElement({ isUser, name, date, color }) {
  if (isUser === "draw") {
    return (
      <div className={styles.draw}>
        <h1 className={styles.nameWin}>Draw</h1>
        <div className={styles.bottomText}>
          <h3>{date}</h3>
          <h3>Draw Game</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className={isUser ? styles.userWin : styles.opponentWin}>
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
