import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="container-nav">
      <Link to="/">
        Home
        <img src="src\img\homeicon.png" alt="" />
      </Link>
      <Link to="/about">
        Instructions
        <img src="src\img\abouticon.png" alt="" />
      </Link>
      <Link to="/game">
        game
        <img src="\src\img\joystickicon.png" alt="" />
      </Link>
      <Link to="/highscore">
        High Score
        <img src="src\img\highscoreicon.png" alt="" />
      </Link>
      <Link to="/contact">
        Contact
        <img src="src\img\contacticon.png" alt="" />
      </Link>
    </nav>
  );
};
