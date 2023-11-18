import { LayoutPage } from "../components/Layouts/LayoutPage";

export function About() {
  return (
    <LayoutPage>
      <h2>How to play</h2>
      <div className="instructions-body">
        <div className="disappearingAnimations">
          <div className="img-container">
            <img src="src/pages/mortyportal.gif" alt="" className="portal" />
            <img src="src/img/rick.png" alt="" className="rick" />
            <img src="src/img/morty.png" alt="" className="morty" />
          </div>
        </div>
        <div className="instructions">
          <p>
            Rick and morty Have been sucked into the retro cartoon universe.
            Help them get home by beating the game. and if you so happen to get
            the highscore you'll make a big impact on the retro universe.
          </p>
          <h3>Let's play </h3>
          <ul className="game-instructions">
            <li>step 1 click play game</li>
            <li>step 2 analyze the silhouette</li>
            <li>step 3 click the name of the character</li>
            <li>step 4 repeat the process</li>
          </ul>
          <p>
            You will continue to go through the game until you have lost all of
            your lives. If your proud summit your score! if not try for a new
            highscore!
          </p>
        </div>
      </div>
    </LayoutPage>
  );
}
