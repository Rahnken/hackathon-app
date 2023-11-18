import React, { useState } from "react";
import { LayoutPage } from "../components/Layouts/LayoutPage";

export const SubmitScore = ({ score }: { score: number }) => {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/highscores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, score }),
    });
    const data = await response.json();
    console.log(data);
    setSubmitted(true);
  };
  return (
    <LayoutPage>
      <div className="submit-score-container">
        <h1>Submit Your Score</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="number" id="score" value={score} disabled />
          <button type="submit">Submit</button>
        </form>
        {submitted && <p>Thanks for submitting your score!</p>}
      </div>
    </LayoutPage>
  );
};
