import { Creator } from "../utils/types";
export const CreatorCard = ({ creator }: { creator: Creator }) => {
  return (
    <>
      <div className="card-container2 sizing-container">
        <h4 className="creatorName">{creator.name}</h4>
        <div className="img-container">
          <img
            className="creator-img"
            src={creator.img.src}
            alt={creator.img.alt}
          />
        </div>
        <ul>
          {creator.socials.map(({ name, url }) => {
            return (
              <ul className="creatorName">
                {name}{" "}
                <a className="links" href={url}>
                  {url}
                </a>{" "}
              </ul>
            );
          })}
        </ul>
      </div>
    </>
  );
};
