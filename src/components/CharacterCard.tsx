import { useState } from "react";
import { Character } from "../utils/types";

export const CharacterCard = ({
  character,
  isFlipped,
  onLoad,
}: {
  character: Character;
  isFlipped: boolean;
  onLoad: () => void; // Callback function for image load
}) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when image is loaded
    onLoad(); // Call the onLoad callback provided by the parent component
  };

  return (
    <>
      {isFlipped ? (
        <div className="card-container">
          {loading && <p>Loading...</p>}
          <img
            src={character.img}
            alt={character.name}
            style={{
              width: "100%",
              height: "100%",
              display: loading ? "none" : "block", // Hide image until loaded
            }}
            onLoad={handleImageLoad} // Handle image load event
          />
          <p>{character.name}</p>
          <p>{character.show}</p>
        </div>
      ) : (
        <div className="card-container">
          <img
            src={character.silhouetteImg}
            alt={character.name}
            onLoad={handleImageLoad}
          />
        </div>
      )}
    </>
  );
};
