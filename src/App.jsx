import "./App.css";
import Square from "./component/square";
import { useState, useEffect } from "react";
import { winPatterns } from "./component/pattern";
import ResultScreen from "./component/resultScrean";

function App() {
  const [player, setPlayer] = useState("🟡");
  const [player0Pattern, setPlayer0Pattern] = useState("");
  const [playerXPattern, setPlayerXPattern] = useState("");
  const [result, setResult] = useState({
    winner: false,
    draw: false,
    whoIsWin: "",
  });

  useEffect(() => {
    setPlayer0Pattern("");
    setPlayerXPattern("");
  }, []);

  useEffect(() => {
    result.winner === false &&
      player0Pattern.length + playerXPattern.length == 9 &&
      setResult({ winner: false, draw: true, whoIsWin: "" });

    winPatterns.map((pattern) => {
      playerXPattern.includes(pattern[0]) &&
        playerXPattern.includes(pattern[1]) &&
        playerXPattern.includes(pattern[2]) &&
        setResult({ winner: true, draw: false, whoIsWin: "❌" });

      player0Pattern.includes(pattern[0]) &&
        player0Pattern.includes(pattern[1]) &&
        player0Pattern.includes(pattern[2]) &&
        setResult({ winner: true, draw: false, whoIsWin: "🟡" });
    });

    if (result.draw === true || result.winner === true) {
      setPlayer0Pattern("");
      setPlayerXPattern("");
    }
  }, [player]);

  return (
    <div className="App">
      <ResultScreen result={result} setResult={setResult} />
      <h1 className="title">
        Let's Play <br /> Tic Tac T🟡e
      </h1>
      <div className="square-container">
        {Array(9)
          .fill("")
          .map((item, idx) => (
            <Square
              player={player}
              setPlayer={setPlayer}
              id={`${idx}`}
              player0Pattern={player0Pattern}
              playerXPattern={playerXPattern}
              setPlayer0Pattern={setPlayer0Pattern}
              setPlayerXPattern={setPlayerXPattern}
              result={result}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
