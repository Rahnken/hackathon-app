import { LayoutPage } from "../components/Layouts/LayoutPage";

export function HighScore() {
  // TODO: Replace with actual high scores

  const allScores = [
    { name: "Eric", score: 100 },
    { name: "Jessica", score: 99 },
    { name: "Jon", score: 98 },
  ];

  return (
    <LayoutPage>
      <h2>High Score</h2>
      <div className="container">
        <div className="high-score-container">
          <table style={{ width: "100%" }}>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
            {allScores.map((score, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{score.name}</td>
                  <td>{score.score}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </LayoutPage>
  );
}
