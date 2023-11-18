import React, { useEffect, useState } from "react";
import { Character } from "../utils/types";
import { CharacterCard } from "../components/CharacterCard";
import { LayoutPage } from "../components/Layouts/LayoutPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

export const Game = ({ characters }: { characters: Character[] }) => {
  const [score, setScore] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState("playing"); // ["playing", "reset"]

  const maxLives = 3;
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
    } else {
      setLives(lives - 1);
      if (lives === 0) {
        setGameState("reset");
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
  const resetGame = () => {
    setGameState("playing");
    setIsFlipped(false);
    setScore(0);
    setLives(3);
    setCurrentCharacterIndex(0);
  };
  useEffect(() => {
    const playOptions = chooseOptions();
    // randomize options
    playOptions.sort(() => Math.random() - 0.5);
    setOptions(playOptions);
  }, [currentCharacterIndex]);

  return (
    <LayoutPage>
      <div className="body-content">
        <h2 className="game-page">Guess Who Game</h2>
        <div className="character-container-main">
          <CharacterCard
            character={characters[currentCharacterIndex]}
            isFlipped={isFlipped}
          />
        </div>
        <div
          className="gameContainer"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="lives-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {[...Array(maxLives)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                size="3x"
                color={index < lives ? "red" : "grey"}
                {...(index < lives ? { beat: true } : {})}
                icon={index < lives ? faHeart : faHeartBroken}
              />
            ))}
          </div>

          <div className="score-container">
            <div className="score">
              <h3>Score: {score}</h3>
            </div>
            <div className="high-score">
              <h3>High Score: {highScore}</h3>
            </div>
          </div>
        </div>

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
        {hasGuessed && gameState != "reset" && (
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
        {gameState === "reset" && (
          <div className="reset-button-container">
            <button
              id="reset-button"
              className="next-button"
              onClick={resetGame}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </LayoutPage>
  );
};
