import React, { useState } from "react";
import "./Hobbies.css";

export default function Hobbies() {
  const [hobbies, setHobbies] = useState([
    "Photography",
    "Coding",
    "Reading",
    "Cooking",
  ]);

  const [disabled, setDisabled] = useState(false);

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return [...arr];
  };

  const shuffleHobbies = () => {
    setDisabled(true);
    setTimeout(() => {
      setHobbies((prev) => shuffleArray([...prev]));
      setDisabled(false);
    }, 150);
  };

  return (
    <main className="container">
      <h1>My Hobbies</h1>
      <div className="controls">
        <button id="shuffleBtn" onClick={shuffleHobbies} disabled={disabled}>
          Shuffle Hobbies
        </button>
      </div>
      <ul id="hobbyList">
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </main>
  );
}
