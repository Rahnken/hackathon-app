import { LayoutPage } from "../components/Layouts/LayoutPage";

export default function Home() {
  return (
    <LayoutPage>
      <div className="container-title">
        <h1 className="glitch">2fly4wifi</h1>
        <div className="logo-container">
          <img src="src\img\2fly4wifi-logo.png" alt="2fly4wifi-logo" />
        </div>
        <h2 className="glitch">by jon's angels</h2>
      </div>
      <div className="welcome-info">
        <h3 className="our-game">our mission for you</h3>
        <p>
          Anime and cartoons have become an important part of our history. they
          are so much more the just animations. since the first cartoon was
          invented in 1908 they have been a way to relay life lessons in
          friendship, love, dreams, and how over life's obstacles. So our
          mission to you, (if you so choose to accept it) is to show the
          knowledge that you have gained from these animations by guessing as
          many of the characters as you can.
        </p>
      </div>
    </LayoutPage>
  );
}
