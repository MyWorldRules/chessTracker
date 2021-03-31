import React from "react";
import "./Home.css";
import SaveGame from "../../Components/SaveGame/SaveGame";
import GamesWon from "../../Components/GamesWon/GamesWon";
import GameHistory from "../../Components/GameHistory/GameHistory";

function Home() {
  return (
    <div className="Home">
      <div className="opponentTextDiv">
        <h1>Tarun vs Rohit</h1>
      </div>
      <div className="widgets">
        <SaveGame />
        <div className="gamesWon">
          <GamesWon isUser name="Tarun" wins="100" total="150" />
          <GamesWon name="Rohit" wins="50" total="150" />
          <GamesWon isUser="draw" name="Draws" wins="0" total="150" />
        </div>
        <GameHistory />
      </div>
      <div className="totalWinsBar"></div>
    </div>
  );
}

export default Home;
