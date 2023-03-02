import React from "react";
import { useState } from "react";

const Riddles = ({ riddleData }) => {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState(null);

  const userAnswer = (e) => {
    const value = e.target.value;
    setUserInput(value);
    console.log(value);
  };

  // const storeanswer = riddleData.map((data) => {
  //   setAnswer(data.answer);
  //   return 
  // });


  const submitHandler = () => {
riddleData.map((data)=> {
  if(data.answer === userInput) {
    setAnswerStatus(true);
  }
  else {
    setAnswerStatus(false);

  }
})
    //check if user input is === data.answer
    // if it is change background color to green and return h1 tag "Congrat"
    // if not correct return try agin H1 tag with red background
  };

  console.log(riddleData)
  console.log(answer)
  console.log(answerStatus)
  return (
    <div className="riddles-container">
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
           { answerStatus && <h3>{answerStatus?'correct': 'incorrect'}</h3>}
          </div>
        );
      })}
    </div>
  );
};

export default Riddles;

//Why is my api calling twice for each call and and then reloading with a new all again twice
