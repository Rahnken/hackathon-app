import { LayoutPage } from "../components/Layouts/LayoutPage";
import useFetch from "../utils/hooks";
import { useEffect, useState } from "react";
import "../tableStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { Score } from "../utils/types";

export function HighScore() {
  const { data: scores, isPending, error } = useFetch(
    "https://hackathon-api-6grr.onrender.com/api/highscores"
  );
  const [sortedScores, setSortedScores] = useState([]);

  useEffect(() => {
    if (scores && scores.length > 0) {
      const sorted = scores
        .slice()
        .sort(
          (a: { score: number }, b: { score: number }) => b.score - a.score
        );
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
              <thead>
                <tr>
                  <th className="glitch">Rank</th>
                  <th className="glitch">Name</th>
                  <th className="glitch">Score</th>
                </tr>
              </thead>{" "}
              <tbody>
                {sortedScores.map((score: Score, index) => {
                  let medalIcon = null;

                  if (index === 0) {
                    medalIcon = <FontAwesomeIcon icon={faMedal} color="gold" />;
                  } else if (index === 1) {
                    medalIcon = (
                      <FontAwesomeIcon icon={faMedal} color="silver" />
                    );
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
              </tbody>
            </table>
          </div>
        )}
      </div>
    </LayoutPage>
  );
}
