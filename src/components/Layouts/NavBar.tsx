import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="container-nav">
      <Link to="/">
        Home
        <img src="\img\homeicon.png" alt="" />
      </Link>
      <Link to="/about">
        Instructions
        <img src="\img\abouticon.png" alt="" />
      </Link>
      <Link to="/game">
        game
        <img src="\img\joystickicon.png" alt="" />
      </Link>
      <Link to="/highscore">
        High Score
        <img src="\img\highscoreicon.png" alt="" />
      </Link>
      <Link to="/contact">
        Contact
        <img src="\img\contacticon.png" alt="" />
      </Link>
    </nav>
  );
};
