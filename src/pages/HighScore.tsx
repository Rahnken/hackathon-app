import { LayoutPage } from "../components/Layouts/LayoutPage";
import useFetch from "../utils/hooks";

export function HighScore() {
  // TODO: Replace with actual high scores

  const { data: scores, isPending, error } = useFetch(
    "http://localhost:8000/highscores"
  );

  return (
    <LayoutPage>
      <h2>High Score</h2>
      <div className="container">
        {error && <div>{error}</div>}
        {isPending ? (
          <div>Loading Scores ...</div>
        ) : (
          <div className="high-score-container">
            <table style={{ width: "100%" }}>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
              {scores.map((score, index) => {
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
        )}
      </div>
    </LayoutPage>
  );
}
