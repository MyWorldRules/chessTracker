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

  //---
  var dbStatsLocation = db.ref(
    "/" +
      user.uid +
      "/-" +
      window.location.href.split("opponent-")[1] +
      "/games"
  );
  const dbStatsQuery = dbStatsLocation.orderByChild("timestamp");
  const [snapshotsStats, loadingStats, errorStats] = useList(dbStatsQuery);
  var userWins = 0;
  var opponentWins = 0;
  var draws = 0;

  if (!loadingStats && snapshotsStats) {
    snapshotsStats.map((value, index) => {
      switch (value.val().isUser) {
        case "user":
          userWins++;
          break;
        case "opponent":
          opponentWins++;
          break;
        case "draw":
          draws++;
          break;
        default:
          console.log("problem with stats");
          console.log(value.val());
      }
    });
  }

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
          <GamesWon
            isUser
            name={userName}
            wins={userWins}
            total={userWins + opponentWins + draws}
          />
          <GamesWon
            name={opponent}
            wins={opponentWins}
            total={userWins + opponentWins + draws}
          />
          <GamesWon
            isUser="draw"
            name="Draws"
            wins={draws}
            total={userWins + opponentWins + draws}
          />
        </div>
        <GameHistory />
      </div>
      <div className="totalWinsBar"></div>
    </div>
  );
}

export default Home;
