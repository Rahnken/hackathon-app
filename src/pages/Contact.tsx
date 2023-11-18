import { CreatorCard } from "../components/CreatorCard";
import { LayoutPage } from "../components/Layouts/LayoutPage";
import { Creator } from "../utils/types";

export default function Contact() {
  const creators: Creator[] = [
    {
      name: "Jessica Pickens",
      img: {
        src: "src/img/RickJess.png",
        alt: "Rick and Morty Jess",
      },
      socials: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/jessica-pickens-186835141/",
        },
        {
          name: "Github",
          url: "https://github.com/Jessi2498",
        },
        {
          name: "Email",
          url: "jessica.pickens2498@gmail.com",
        },
      ],
    },
    {
      name: "Eric Donnelly",
      img: {
        src: "src/img/RickEric.png",
        alt: "Rick and Morty Eric",
      },
      socials: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/erdonnelly/",
        },
        {
          name: "Github",
          url: "https://github.com/Rahnken",
        },
        {
          name: "Email",
          url: "eric@donnellydev.ca",
        },
      ],
    },
    {
      name: "Jon Duff",
      img: {
        src: "src/img/RickJon.png",
        alt: "Rick and Morty Jon",
      },
      socials: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/jonathan-duff",
        },
        {
          name: "Github",
          url: "https://github.com/DuffCoding",
        },
        {
          name: "Email",
          url: "duffx069@umn.edu",
        },
        {
          name: "Website",
          url: "https://codepen.io/Jonathan-Duff/pen/VwrqmvG",
        },
      ],
    },
  ];
  return (
    <LayoutPage>
      <h2>Contact</h2>
      <p>
        If you have any questions or concerns, please feel free to reach out to
        us!
      </p>
      <div className="flex-container">
        {creators.map((creator) => (
          <CreatorCard creator={creator} key={creator.name} />
        ))}
      </div>
    </LayoutPage>
  );
}
