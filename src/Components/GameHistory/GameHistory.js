import React, { useState, useEffect } from "react";
import styles from "./GameHistory.module.css";
import HistoryElement from "./HistoryElement/HistoryElement";
import { db, auth } from "../../firebase";
import { useList } from "react-firebase-hooks/database";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";

function GameHistory() {
  const [user, userLoading] = useAuthState(auth);
  var dbRef = db.ref("/" + user.uid);

  const [snapshots, loading, error] = useList(dbRef);
  const [delGame, setDelete] = useState("potato");

  return (
    <div className={styles.gameHistory}>
      <div className={styles.topSectionHistory}>
        {!loading && snapshots ? (
          snapshots.map((game, index) => (
            <div
              onClick={() => {
                if (delGame === game.key) {
                  setDelete("potato");
                } else {
                  setDelete(game.key);
                }
              }}
              key={index}
            >
              <HistoryElement
                isUser={game.val().isUser}
                name={game.val().name}
                date={game.val().date}
                color={game.val().color}
                isClicked={delGame === game.key}
              />
            </div>
          ))
        ) : (
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Pedro_luis_romani_ruiz.gif" />
          </div>
        )}
      </div>
      <div
        className={styles.gradientButton}
        onClick={() => dbRef.child(delGame).remove()}
      >
        <h1>Deleted Selected</h1>
      </div>
    </div>
  );
}

export default GameHistory;
