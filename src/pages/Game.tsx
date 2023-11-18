import React, { useState } from "react";
import { Character, GameState } from "../utils/types";
import { LayoutPage } from "../components/Layouts/LayoutPage";
import { Link } from "react-router-dom";
import { GameBoard } from "../components/Layouts/GameBoard";

export const Game = ({ characters }: { characters: Character[] }) => {
  const [score, setScore] = useState(0);
  const [characterArray, setCharacterArray] = useState<Character[]>(characters);
  const [highScore, setHighScore] = useState(0);
  const [gameState, setGameState] = useState<GameState>("notStarted");

  const handleScoreUpdate = (correctGuess: boolean) => {
    if (correctGuess) {
      setScore(score + 1);
      if (score >= highScore) {
        setHighScore(highScore + 1);
      }
    } else {
      setHighScore(highScore);
    }
  };
  const setPlaying = () => {
    if (gameState === "notStarted") {
      const shuffledCharacters = [...characters].sort(
        () => Math.random() - 0.5
      );
      setCharacterArray(shuffledCharacters);
      setGameState("playing");
    }
  };

  const resetGame = () => {
    setScore(0);
    setGameState("notStarted");
  };
  return (
    <LayoutPage>
      <div className="body-content">
        <h2 className="game-page">
          <img src="src\img\2fly4wifi-logo.png" alt="" className="logo" />
          Guess Who Game
          <img src="src\img\2fly4wifi-logo.png" alt="" className="logo" />
        </h2>
        {gameState === "notStarted" && (
          <div className="start-button-container">
            <button
              id="start-button"
              className="next-button"
              onClick={setPlaying}
            >
              Start Game
            </button>
          </div>
        )}
        {gameState === "playing" && (
          <>
            <GameBoard
              characterArray={characterArray}
              gameState={gameState}
              onGameStateChanged={setGameState}
              updateScore={handleScoreUpdate}
              resetGame={resetGame}
            />

            <div className="score-container">
              <div className="score">
                <h3>Score: {score}</h3>
              </div>
              <div className="high-score">
                <h3>High Score: {highScore}</h3>
              </div>
            </div>
          </>
        )}
      </div>
      {gameState === "reset" && (
        <div className="reset-button-container">
          <h3>Game Over!</h3>
          <h3>Score: {score}</h3>
          <Link to={`/submitScore?score=${highScore}`}>Submit Your Score</Link>
          <button id="reset-button" className="next-button" onClick={resetGame}>
            Reset
          </button>
        </div>
      )}
    </LayoutPage>
  );
};
