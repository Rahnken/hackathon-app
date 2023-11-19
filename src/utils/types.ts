export type Character = {
  id: number;
  name: string;
  silhouetteImg: string;
  img: string;
  show: string;
};
type SocialsObject = {
  name: string;
  url: string;
};

export type Creator = {
  name: string;
  img: {
    src: string;
    alt: string;
  };
  socials: SocialsObject[];
};
export type Score = {
  id: number;
  name: string;
  score: number;
};
export type GameState = "playing" | "reset" | "notStarted";
