import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const randomIndex = () => Math.floor(Math.random() * answers.length);
  const [answer, setAnswer] = useState({
    msg: "Think of a question?",
    color: "black",
  });
  const reset = () => {
    setAnswer({
      msg: "Think of a question?",
      color: "black",
    });
  };

  function handleClick(e) {
    setAnswer(answers[randomIndex()]);
  }

  return (
    <>
      <div
        className="EightBall"
        onClick={handleClick}
        style={{ backgroundColor: answer.color }}
      >
        <h4 className="EightBall-header">{answer.msg}</h4>
      </div>
      <button className="EightBall-reset" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default EightBall;
