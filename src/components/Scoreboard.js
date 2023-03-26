import React, { useState, useEffect, useRef } from "react";

function Scoreboard({ IDs, currentID }) {
  const [score, setScore] = useState(-1);
  const [highScore, setHighScore] = useState(0);
  const [IDsClicked, setIDsClicked] = useState([]);
  let prevID = useRef();

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
  }, [score, highScore]);

  useEffect(() => {
    if (currentID === null) return;
    if (IDsClicked.includes(currentID)) {
      setScore(0);
      setIDsClicked([]);
    } else {
      setScore(prevScore => prevScore + 1);
        setIDsClicked([...IDsClicked, currentID]);
    }
    if (score > highScore) {
      setHighScore(score);
    }
    prevID.current = currentID;
  }, [IDs]);

  return (
    <div className="scoreboard">
      <div className="score">Score: {score}</div>
      <div className="highscore">Highscore: {highScore}</div>
    </div>
  );
}

export default Scoreboard;
