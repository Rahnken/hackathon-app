import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="container-nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/highscore">High Score</Link>
      <Link to="/game">Game</Link>
    </nav>
  );
};
