import { LayoutPage } from "../components/Layouts/LayoutPage";

export function About() {
  return (
    <LayoutPage>
      <h2>How to play</h2>
      <div className="instructions-body">
        <div className="disappearingAnimations">
          <div className="absolute-container">
            <div className="portal-container"></div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
}
