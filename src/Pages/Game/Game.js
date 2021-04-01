import React, { useState } from "react";
import styles from "./Game.module.css";
import firebase from "firebase";
import { db, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getByDisplayValue } from "@testing-library/dom";
import { useList } from "react-firebase-hooks/database";
import { Link } from "react-router-dom";
import { IoChevronBackCircle } from "react-icons/io5";
import { useParams } from "react-router-dom";

function Game() {
  const [user, userLoading] = useAuthState(auth);
  const [addGame, setAddGame] = useState(false);
  const [opponent, setOpponent] = useState("");

  const dbRef = db.ref("/" + user.uid);
  const [snapshots, loading, error] = useList(dbRef);

  const addNewGame = () => {
    dbRef.push({
      opponent: opponent,
    });
    window.location.reload();
  };
  return (
    <div className={styles.parentComp}>
      <h1 className={styles.chooseGameText}>Game Selector</h1>
      <div className={styles.game}>
        <div
          className={styles.topSection + " " + (addGame ? styles.hidden : "")}
        >
          {snapshots.map((game, index) => (
            <Link
              to={"/opponent" + game.key}
              style={{ textDecoration: "none" }}
            >
              <div className={styles.gameOption}>
                <h1>{game.val().opponent}</h1>
              </div>
            </Link>
          ))}
        </div>
        <div
          className={styles.topSection + " " + (!addGame ? styles.hidden : "")}
        >
          <div className={styles.backButton}>
            <IoChevronBackCircle
              size={50}
              color="gray"
              onClick={() => {
                setAddGame(!addGame);
                setOpponent("");
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className={styles.gameOption}>
            <input
              onChange={(e) => setOpponent(e.target.value)}
              value={opponent}
              placeholder="Type Opponent Name"
              type="text"
              className={styles.input}
            ></input>
          </div>
        </div>
        <div
          className={styles.gradientButton}
          onClick={
            !addGame
              ? () => {
                  setAddGame(true);
                  console.log(addGame);
                }
              : addGame && opponent !== ""
              ? () => {
                  addNewGame();
                  console.log(addGame);
                }
              : () => {
                  setAddGame(false);
                  console.log(addGame);
                }
          }
        >
          <h1> {!addGame ? "Add" : "Confirm"} Opponent</h1>
        </div>
      </div>
    </div>
  );
}

export default Game;
