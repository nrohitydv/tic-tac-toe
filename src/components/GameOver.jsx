import React from "react";

function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It&apos;'s a tie!</p>}
      <p>
        <button onClick={onRestart}>Play Again?</button>
      </p>
    </div>
  );
}

export default GameOver;
