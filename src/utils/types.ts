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
