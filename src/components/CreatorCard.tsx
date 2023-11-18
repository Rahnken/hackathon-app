import { Creator } from "../utils/types";
export const CreatorCard = ({ creator }: { creator: Creator }) => {
  return (
    <>
      <div className="card-container">
        <h4 className="creatorName">{creator.name}</h4>
        <div className="img-container">
          <img src={creator.img.src} alt={creator.img.alt} />
        </div>
        <ul>
          {creator.socials.map(({ name, url }) => {
            return (
              <li>
                {name} <a href={url}>{url}</a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
