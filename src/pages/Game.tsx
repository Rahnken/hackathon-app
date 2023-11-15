import React, { useState } from "react";
import { Character } from "../utils/types";
import { CharacterCard } from "../components/CharacterCard";

export const Game = (character: Character) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Do I want to hold the game state here

  const handleGuess = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const guess = target.innerText;

    console.log(guess);
    setIsFlipped(!isFlipped);
    if (guess === character.name) {
      setScore(score + 1);
      if (score >= highScore) {
        setHighScore(highScore + 1);
      }
    } else {
      setScore(0);
    }
  };

  return (
    <>
      <CharacterCard character={character} isFlipped={isFlipped} />
      {/* // Should I move this to a separate component? */}
      <div className="guess-button-container">
        <button id="opt-1" onClick={handleGuess} className="guess-button">
          Eevee
        </button>
        <button id="opt-2" onClick={handleGuess} className="guess-button">
          Pikachu
        </button>
        <button id="opt-3" onClick={handleGuess} className="guess-button">
          MEMEs
        </button>
        <button id="opt-4" onClick={handleGuess} className="guess-button">
          Someone else
        </button>
      </div>
      <div className="score-container">
        <div className="score">Score: {score}</div>
        <div className="high-score">High Score: {highScore}</div>
      </div>
    </>
  );
};
