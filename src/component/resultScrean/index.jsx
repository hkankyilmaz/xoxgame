import React from "react";
import "./style.css";

function ResultScreen(props) {
  React.useEffect(() => {
    if (props.result.winner == true || props.result.draw == true) {
      document.querySelector(".result-container").style.visibility = "visible";
    }
  });

  return (
    <div className="result-container">
      <h2 className="result">
        {props.result.winner === false ? "Oops! Its a draw" : "Congratulation!"}
      </h2>
      <h3 className="player">
        {props.result.winner === false
          ? "No One Won The Game"
          : `${props.result.whoIsWin} Won The Game`}
      </h3>
      <button
        onClick={() => {
          props.setResult({ winner: false, draw: false, whoIsWin: "" });
          document.querySelector(".result-container").style.visibility =
            "hidden";
        }}
      >
        Restart
      </button>
    </div>
  );
}

export default ResultScreen;
