import React from "react";
import { useState } from "react";

const Riddles = ({ riddleData }) => {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");

  const userAnswer = (e) => {
    const value = e.target.value;
    setUserInput(value);
    console.log(value);
  };

  const submitHandler = () => {
    //check if user input is === data.answer
    // if it is change background color to green and return h1 tag "Congrat"
    // if not correct return try agin H1 tag with red background
  };
  return (
    <div className="riddles-container">
      {riddleData.map((data) => {
        const riddleAnswer = data.answer;
        console.log(riddleAnswer);
        return (
          <div className="riddle">
            <h1> {data.title}</h1>
            <h2> {data.question}</h2>
            <input
              // value={userInput}
              placeholder="try your luck"
              className="user-answer"
              onChange={userAnswer}
            ></input>
            <button onClick={submitHandler}>submit</button>
          </div>
        );
      })}
    </div>
  );
};

export default Riddles;
