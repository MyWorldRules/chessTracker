import React from "react";
import styles from "./GamesWon.module.css";
function GamesWon({ isUser, name, wins, total }) {
  if (isUser === "draw") {
    return (
      <div className={styles.draw}>
        <h1 className={styles.gamesWonName}>{name}</h1>
        <h1 className={styles.gamesWonNumber}>
          {wins}/{total} Games
        </h1>
      </div>
    );
  } else {
    return (
      <div className={isUser ? styles.user : styles.opponent}>
        <h1 className={styles.gamesWonName}>{name} Wins</h1>
        <h1 className={styles.gamesWonNumber}>
          {wins}/{total} Games
        </h1>
      </div>
    );
  }
}

export default GamesWon;
