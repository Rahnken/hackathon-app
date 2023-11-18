import React, { useState, useEffect } from "react";
import { CharacterCard } from "../CharacterCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import { Character, GameState } from "../../utils/types";

export const GameBoard = ({
  characterArray,
  gameState,
  onGameStateChanged,
  updateScore,
  resetGame,
}: {
  characterArray: Character[];
  gameState: GameState;
  onGameStateChanged: (state: GameState) => void;
  updateScore: (correctGuess: boolean) => void;
  resetGame: () => void;
}) => {
  const maxLives = 3;
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [lives, setLives] = useState(maxLives);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading state to true when the game starts or when a new character loads
  }, [characterArray]);

  const handleImageLoad = () => {
    setLoading(false); // Once the image is loaded, set loading state to false
  };

  useEffect(() => {
    if (gameState === "reset") {
      setLives(maxLives);
      resetGame();
    }
  }, [gameState, resetGame]);

  const handleGuess = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const target = event.target as HTMLButtonElement;
    const guess = target.innerText;

    console.log(guess);
    setIsFlipped(!isFlipped);
    setHasGuessed(true);

    if (guess === characterArray[currentCharacterIndex].name) {
      updateScore(true);
    } else {
      setLives(lives - 1);
      if (lives === 0) {
        onGameStateChanged("reset");
      }
    }
  };

  const chooseOptions = () => {
    const tempOptions = [];
    const correctCharacter = characterArray[currentCharacterIndex];
    tempOptions.push(correctCharacter.name);
    while (tempOptions.length < 4) {
      const randomIndex = Math.floor(Math.random() * characterArray.length);
      const randomCharacter = characterArray[randomIndex];
      if (
        !tempOptions.includes(randomCharacter.name) &&
        randomCharacter !== correctCharacter
      ) {
        tempOptions.push(randomCharacter.name);
      }
    }
    return tempOptions;
  };

  const nextCharacter = () => {
    setHasGuessed(false);
    setIsFlipped(false);
    if (currentCharacterIndex === characterArray.length - 1) {
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
      <div className="character-container-main">
        <div className="color-2">
          <div className="color-3">
            <div className="color-4">
              <div className="color-5">
                <CharacterCard
                  character={characterArray[currentCharacterIndex]}
                  isFlipped={isFlipped}
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="gameContainer"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <div
            className="lives-container"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {[...Array(maxLives)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                size="3x"
                color={index < lives ? "var(--fontGreen)" : "grey"}
                {...(index < lives ? { beat: true } : {})}
                icon={index < lives ? faHeart : faHeartBroken}
              />
            ))}
          </div>
        </div>

        {!hasGuessed && !loading && (
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
      </div>
    </>
  );
};
