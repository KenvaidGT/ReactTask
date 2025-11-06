import React, { useState } from "react";
import BusinessCard from "./BusinessCard";
import Gallery from "./Gallery";
import Hobbies from "./Hobbies";
import Todo from "./Todo";

function App() {
  const [page, setPage] = useState("card");

  const buttonStyle = {
    backgroundColor: "#fff",
    border: "2px solid #000",
    borderRadius: "12px",
    padding: "10px 20px",
    cursor: "pointer",
    color: "#000",
    fontWeight: "bold",
    transition: "0.2s",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#d81848",
    color: "#fff",
  };

  return (
    <div>
      {}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "30px 0",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setPage("card")}
          style={page === "card" ? activeButtonStyle : buttonStyle}
        >
          Business Card
        </button>

        <button
          onClick={() => setPage("gallery")}
          style={page === "gallery" ? activeButtonStyle : buttonStyle}
        >
          Gallery
        </button>

        <button
          onClick={() => setPage("hobbies")}
          style={page === "hobbies" ? activeButtonStyle : buttonStyle}
        >
          Hobbies
        </button>

        <button
          onClick={() => setPage("todo")}
          style={page === "todo" ? activeButtonStyle : buttonStyle}
        >
          To-Do List
        </button>
      </div>

      {page === "card" && <BusinessCard />}
      {page === "gallery" && <Gallery />}
      {page === "hobbies" && <Hobbies />}
      {page === "todo" && <Todo />}
    </div>
  );
}

export default App;
