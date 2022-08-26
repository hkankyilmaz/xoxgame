import React from "react";
import "./style.css";

function Square(props) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [value, setValue] = React.useState(null);

  const patternX = props.playerXPattern;
  const pattern0 = props.player0Pattern;

  React.useEffect(() => {
    props.player == "🟡" ? props.setPlayer("❌") : props.setPlayer("🟡");

    if (isClicked === true) {
      props.player == "🟡"
        ? props.setPlayer0Pattern(`${pattern0}${props.id}`)
        : props.setPlayerXPattern(`${patternX}${props.id}`);
    }

    if (props.result.winner === true || props.result.draw === true) {
      setIsClicked(false);
    }
  }, [isClicked, props.result]);

  return (
    <div
      onClick={() => {
        if (isClicked == false) {
          setValue(props.player);
          setIsClicked(true);
        }
      }}
      className="square"
    >
      {isClicked == true ? value : null}
    </div>
  );
}

export default Square;
