import { useState } from "react";
import { LayoutPage } from "../components/Layouts/LayoutPage";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../tableStyles.css";

export const SubmitScore = () => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [queryParams] = useSearchParams();
  const score = queryParams.get("score") || [];
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/highscores", {
      method: "POST",
      headers: { ["Content-Type"]: "application/json" },
      body: JSON.stringify({ name, score }),
    });
    const data = await response.json();
    // Just Here to use the data variable
    console.log(data);
    setSubmitted(true);
  };
  return (
    <LayoutPage>
      <div className="submit-score-container">
        <h2>Submit Your Score</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="glitch"
          />
          <input type="text" id="score" value={score} disabled />
          <button className="next-button" type="submit">
            Submit
          </button>
        </form>
        {submitted && (
          <>
            <p>Thanks for submitting your score!</p>
            <Link className="next-button" to="/highscore">
              View High Scores
            </Link>
          </>
        )}
      </div>
    </LayoutPage>
  );
};
