import React from "react";
import styles from "./GameHistory.module.css";
import HistoryElement from "./HistoryElement/HistoryElement";

function GameHistory() {
  return (
    <div className={styles.gameHistory}>
      <div className={styles.topSectionHistory}>
        <HistoryElement isUser name="Tarun" date="3/11/2021" color="Black" />
        <HistoryElement name="Rohit" date="3/11/2021" color="Black" />
        <HistoryElement
          isUser="draww"
          name="Potato"
          date="3/11/2021"
          color="Black"
        />
        <HistoryElement isUser name="Tarun" date="3/10/2021" color="Black" />
        <HistoryElement isUser name="Tarun" date="3/09/2021" color="Black" />
        <HistoryElement isUser name="Tarun" date="3/09/2021" color="Black" />
        <HistoryElement name="Rohit" date="3/09/2021" color="Black" />
        <HistoryElement
          isUser="draw"
          name="Potato"
          date="3/09/2021"
          color="Black"
        />
      </div>
      <div className={styles.gradientButton}>
        <h1>Deleted Selected</h1>
      </div>
    </div>
  );
}

export default GameHistory;
