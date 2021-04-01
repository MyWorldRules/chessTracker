import React, { useState, useEffect } from "react";
import "./Home.css";
import SaveGame from "../../Components/SaveGame/SaveGame";
import GamesWon from "../../Components/GamesWon/GamesWon";
import GameHistory from "../../Components/GameHistory/GameHistory";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../../firebase";
import { useList } from "react-firebase-hooks/database";

function Home() {
  const [user, userLoading] = useAuthState(auth);
  var dbRef = db.ref(
    "/" + user.uid + "/-" + window.location.href.split("opponent-")[1]
  );
  const [snapshots, loading, error] = useList(dbRef);
  const [opponent, setOpponent] = useState("");

  const [userName, setUserName] = useState(
    user.displayName.charAt(0).toUpperCase() +
      user.displayName
        .substring(0, user.displayName.lastIndexOf(" "))
        .toLowerCase()
        .slice(1)
  );

  useEffect(() => {
    snapshots.map((game, index) => {
      if (typeof game.val() === "string") {
        console.log("Opponent Name");
        console.log(game.val());
        setOpponent(
          game.val().charAt(0).toUpperCase() +
            game.val().split(" ")[0].toLowerCase().slice(1)
        );
      }
    });
  });

  return (
    <div className="Home">
      <div className="opponentTextDiv">
        <h1>
          {userName} vs {opponent}
        </h1>
      </div>
      <div className="widgets">
        <SaveGame userName={userName} opponentName={opponent} />
        <div className="gamesWon">
          <GamesWon isUser name={userName} wins="100" total="150" />
          <GamesWon name={opponent} wins="50" total="150" />
          <GamesWon isUser="draw" name="Draws" wins="0" total="150" />
        </div>
        <GameHistory />
      </div>
      <div className="totalWinsBar"></div>
    </div>
  );
}

export default Home;
