import { LayoutPage } from "../components/Layouts/LayoutPage";

export default function Home() {
  return (
    <LayoutPage>
      <div className="container-title">
        <h1 className="glitch home-page-h1">2fly4wifi</h1>
        <div className="logo-container">
          <img src="img\2fly4wifi-logo.png" alt="2fly4wifi-logo" />
        </div>
        <h2 className="glitch home-page-h2">by jon's angels</h2>
      </div>
      <div className="welcome-info">
        <h3 className="our-game home-page-h3"> Our Mission for You</h3>
        <p className="home-page-p">
          Anime and cartoons have become an important part of our history. They
          are so much more the just animations. Since the first cartoon was
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
