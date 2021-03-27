import React from "react";
import styles from "./SaveGame.module.css";

function SaveGame() {
  return (
    <div className={styles.saveGameDiv}>
      <div className={styles.topSectionSave}>
        <div className={styles.whitePlayer}>
          <h1>Tarun</h1>
        </div>
        <h1>vs</h1>
        <div className={styles.blackPlayer}>
          <h1>Rohit</h1>
        </div>
        <div className={styles.flip}>
          <h3>flip sides</h3>
        </div>
      </div>
      <div className={styles.gradientButton}>
        <h1>Save Results</h1>
      </div>
    </div>
  );
}

export default SaveGame;
