import React from "react";
import { useState } from "react";

const Riddles = ({ riddleData }) => {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState();
  const [background, setBackground] = useState("");

  const userAnswer = (e) => {
    const value = e.target.value;
    setUserInput(value);
    console.log(value);
  };

  const submitHandler = () => {
    riddleData.map((data) => {
      if (data.answer === userInput) {
        setAnswerStatus("correct");
        setBackground("correct");
      } else {
        setAnswerStatus("incorrect");
        setBackground("incorrect");
      }
    });
  };

  console.log(riddleData);
  console.log(answer);
  console.log(answerStatus);
  return (
    <div className={background}>
      {riddleData.map((data) => {
        return (
          <div className="riddle">
            <h1> {data.title}</h1>
            <h2> {data.question}</h2>
            {/* {storeanswer} */}
            <input
              // value={userInput}
              placeholder="try your luck"
              className="user-answer"
              onChange={userAnswer}
            ></input>
            <button onClick={submitHandler}>submit</button>
            <h3>{answerStatus}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Riddles;

//Why is my api calling twice for each call and and then reloading with a new all again twice
