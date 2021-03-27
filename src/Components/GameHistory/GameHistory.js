import React, {useState, useEffect} from "react";
import styles from "./GameHistory.module.css";
import HistoryElement from "./HistoryElement/HistoryElement";
import {db} from "../../firebase"
import { useList } from "react-firebase-hooks/database";
import firebase from "firebase";

function GameHistory() {
  var tutorialsRef = db.ref("/6o0qwB5321bCU77Labw0TUQ5wuJ2");
  const [snapshots, loading, error] = useList(tutorialsRef);
  

  return (
    <div className={styles.gameHistory}>
      <div className={styles.topSectionHistory}>
        <HistoryElement isUser name="Tarun" date="3/11/2021" color="Black" />
        {!loading && snapshots ? (
          snapshots.map((game, index) => (
            <HistoryElement isUser={game.val().isUser} name={game.val().name} date={game.val().date} color={game.val().color} />
          ))
        ) : (
          <h1>error</h1>
        )}
      </div>
      <div className={styles.gradientButton}>
        <h1>Deleted Selected</h1>
      </div>
    </div>
  );
}

export default GameHistory;
