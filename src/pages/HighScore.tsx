import { LayoutPage } from "../components/Layouts/LayoutPage";
import useFetch from "../utils/hooks";
import { useEffect, useState } from "react";
import "../tableStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

export function HighScore() {
  const { data: scores, isPending, error } = useFetch(
    "http://localhost:8000/highscores"
  );
  const [sortedScores, setSortedScores] = useState([]);

  useEffect(() => {
    if (scores && scores.length > 0) {
      const sorted = scores.slice().sort((a, b) => b.score - a.score);
      setSortedScores(sorted);
    }
  }, [scores]);
  return (
    <LayoutPage>
      <h2>High Score</h2>
      <div className="container">
        {error && <div>{error}</div>}
        {isPending ? (
          <div>Loading Scores ...</div>
        ) : (
          <div className="high-score-container">
            <table>
              <tr>
                <th className="glitch">Rank</th>
                <th className="glitch">Name</th>
                <th className="glitch">Score</th>
              </tr>
              {sortedScores.map((score, index) => {
                let medalIcon = null;

                if (index === 0) {
                  medalIcon = <FontAwesomeIcon icon={faMedal} color="gold" />;
                } else if (index === 1) {
                  medalIcon = <FontAwesomeIcon icon={faMedal} color="silver" />;
                } else if (index === 2) {
                  medalIcon = (
                    <FontAwesomeIcon icon={faMedal} color="#cd7f32" />
                  );
                }

                return (
                  <tr key={score.id}>
                    <td className="glitch">
                      {medalIcon}
                      {index + 1}
                    </td>
                    <td className="glitch">{score.name}</td>
                    <td className="glitch">{score.score}</td>
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
