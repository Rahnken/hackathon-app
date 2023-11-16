import React, { useState } from "react";
import { Character } from "../utils/types";
import { CharacterCard } from "../components/CharacterCard";

export const Game = ({ characters }: { characters: Character[] }) => {
  const [score, setScore] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Do I want to hold the game state here

  const handleGuess = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const guess = target.innerText;

    console.log(guess);
    setIsFlipped(!isFlipped);
    setHasGuessed(true);

    if (guess === characters[currentCharacterIndex].name) {
      setScore(score + 1);
      if (score >= highScore) {
        setHighScore(highScore + 1);
      }
    }
  };

  // Randomize Button Choices
  // Move to next character
  const nextCharacter = () => {
    setHasGuessed(false);
    setIsFlipped(false);
    if (currentCharacterIndex === characters.length - 1) {
      setCurrentCharacterIndex(0);
    } else {
      setCurrentCharacterIndex(currentCharacterIndex + 1);
    }
  };

  return (
    <>
      <CharacterCard
        character={characters[currentCharacterIndex]}
        isFlipped={isFlipped}
      />
      {/* // Should I move this to a separate component? */}
      {!hasGuessed && (
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
      )}
      {hasGuessed && (
        <div className="next-button-container">
          <button
            id="next-button"
            className="next-button"
            onClick={nextCharacter}
          >
            Next
          </button>
        </div>
      )}
      <div className="score-container">
        <div className="score">Score: {score}</div>
        <div className="high-score">High Score: {highScore}</div>
      </div>
    </>
  );
};
