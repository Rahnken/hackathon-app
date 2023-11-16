export default function Home() {
  return (
    <>
      <div className="container-nav">
        <nav>
          <ul>
            <a href="home">home</a>
            <a href="cartoon-hub">animation list</a>
            <a href="cartoon-game">animation game</a>
            <a href="about-us">about us</a>
          </ul>
        </nav>
      </div>
      <div className="container-body">
        <div className="container-title">
          <h1 className="glitch">2Fly4Wifi</h1>
          <h2 className="glitch">by jon's angels</h2>
        </div>
        <div className="welcome-info">
          <h3 className="our-game">our mission for you</h3>
          <p>
            Anime and cartoons have become an important part of our history.
            they are so much more the just animations. since the first cartoon
            was invented in 1908 they have been a way to relay life lessons in
            friendship, love, dreams, and how over life's obstacles. So our
            mission to you, (if you so choose to accept it) is to show the
            knowledge that you have gained from these animations by guessing as
            many of the characters as you can.
          </p>
        </div>
      </div>
    </>
  );
}
