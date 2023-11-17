import { LayoutPage } from "../components/Layouts/LayoutPage";

export function HighScore() {
  return (
    <LayoutPage>
      <h2>HighScore</h2>
        <div class="container">
          <div class="stop-game game-full-flex">
            <div class="score">
              <div class="score-container">
                  <h1>Coloron</h1>
                  <div class="final-score">21!</div>
                  <div class="result">Awesome!</div>
                  <p>
                      <a class="tweet" href="#" onclick="game.generateTweet()">
                          <i class="fa fa-twitter" aria-hidden="true"></i> Tweet
                      </a>
                  </p>
                  <div>
                      <a class="play-again" href="#" onclick="game.start()">Play Again</a>
                      <a class="main-menu" href="#" onclick="game.intro()">Menu</a>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="small-glows"></div>
        <div class="glow"><div class="sun"></div></div>
        <div class="waves">
            <div class="top_wave"></div>
            <div class="wave1"></div>
            <div class="wave2"></div>
            <div class="wave3"></div>
            <div class="wave4"></div>
        </div>
        <div class="mounts">
            <div class="mount1"></div>
            <div class="mount2"></div>
        </div>
        <div class="clouds"></div>
        <div class="noise"></div>
    </div>
    </LayoutPage>
  );
}
