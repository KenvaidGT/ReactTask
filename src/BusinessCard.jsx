import React from "react";
import "./BusinessCard.css";

export default function BusinessCard() {
  return (
    <div className="card">
      <img
        className="avatar"
        src="https://picsum.photos/seed/profile/200"
        alt="Profile photo"
      />
      <div className="info">
        <h1 className="name">Student Name</h1>
        <p className="role">Front-end Learner</p>
        <p className="bio">
          Passionate about building modern web apps. Enjoys music, coding, and
          outdoor sports.
        </p>
        <a
          className="cta"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout"
          target="_blank"
          rel="noreferrer"
        >
          Learn Flexbox
        </a>
      </div>
    </div>
  );
}
