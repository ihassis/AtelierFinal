
import React from "react";


const words = ["Fundamental", "Crucial", "Core"];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export default function Header() {
const randomWord = getRandomWord();

return (
    <header>
    <img src="./assets/react-core-concepts.png" alt="React Logo" />
    <h1>React Essentials</h1>
    <p>The {randomWord} React concepts you will need.</p>
    </header>
);
}


