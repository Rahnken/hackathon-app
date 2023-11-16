import { Character } from "../utils/types";

export const CharacterCard = ({
  character,
  isFlipped,
}: {
  character: Character;
  isFlipped: boolean;
}) => {
  return (
    <>
      {isFlipped ? (
        <div
          className="card-container"
          style={{
            width: 400,
          }}
        >
          <img
            src={character.img}
            alt={character.name}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <h3>{character.name}</h3>
          <h4>{character.show}</h4>
        </div>
      ) : (
        <div
          className="card-container"
          style={{
            width: 400,
          }}
        >
          <img
            src={character.silhouetteImg}
            alt={character.name}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      )}
    </>
  );
};
