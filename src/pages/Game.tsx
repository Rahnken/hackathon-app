import React, { useEffect, useState } from "react";
import { Character } from "../utils/types";
import { CharacterCard } from "../components/CharacterCard";

export const Game = ({ characters }: { characters: Character[] }) => {
  const [score, setScore] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [options, setOptions] = useState<string[]>([]);

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
  const chooseOptions = () => {
    const tempOptions = [];
    const correctCharacter = characters[currentCharacterIndex];
    tempOptions.push(correctCharacter.name);
    while (tempOptions.length < 4) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters[randomIndex];
      if (
        !tempOptions.includes(randomCharacter.name) &&
        randomCharacter !== correctCharacter
      ) {
        tempOptions.push(randomCharacter.name);
      }
    }
    return tempOptions;
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
  useEffect(() => {
    const playOptions = chooseOptions();
    // randomize options
    playOptions.sort(() => Math.random() - 0.5);
    setOptions(playOptions);
  }, [currentCharacterIndex]);

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
            {options[0]}
          </button>
          <button id="opt-2" onClick={handleGuess} className="guess-button">
            {options[1]}
          </button>
          <button id="opt-3" onClick={handleGuess} className="guess-button">
            {options[2]}
          </button>
          <button id="opt-4" onClick={handleGuess} className="guess-button">
            {options[3]}
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
