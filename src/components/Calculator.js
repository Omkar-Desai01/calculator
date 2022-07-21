import MainDisplay from "./MainDisplay";
import Keypad from "./Keypad";
import React, { useState } from "react";

export default function Calculator() {
  const [question, setQuestion] = useState("");
  const [answer, setAns] = useState("");
  function handleClick(event) {
    const value = event.target.value;
    if (value === "=") {
      setAns(eval(question));
    } else if (value === "C") {
      setQuestion("");
      setAns("");
    } else if (value === "CE") {
      setQuestion(question.slice(0, -1));
    } else {
      setQuestion(question + value);
    }
  }

  return (
    <div className="main-calculator">
      <MainDisplay question={question} answer={answer} />
      <Keypad handleClick={handleClick} />
    </div>
  );
}
