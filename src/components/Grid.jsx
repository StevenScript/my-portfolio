import React, { useState, useEffect } from "react";

const Grid = () => {
  const [moleIndex, setMoleIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (!gameStarted) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 9);
      setMoleIndex(randomIndex);

      setTimeout(() => {
        setMoleIndex(null);
      }, 1000);
    }, 1500);

    return () => clearInterval(interval);
  }, [gameStarted]);

  const handleSquareClick = (index) => {
    if (index === moleIndex) {
      setScore(score + 1);
      setMoleIndex(null);
    }
  };

  const handleStartGame = () => {
    setScore(0);
    setGameStarted(true);
  };

  return (
    <div className="grid">
      <h1>Whack-a-Mole</h1>
      <h2>Score: {score}</h2>
      {!gameStarted ? (
        <button onClick={handleStartGame}>Start Game</button>
      ) : (
        <div className="grid-container">
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className={`square ${index === moleIndex ? "mole" : ""}`}
                onClick={() => handleSquareClick(index)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Grid;
