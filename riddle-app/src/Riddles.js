import React from "react";
import { useState } from "react";

const Riddles = ({ riddleData,background,setBackground,next,setNext}) => {
  const [userInput, setUserInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [answerStatus, setAnswerStatus] = useState();
  const [attempts , setAttempts] = useState(0)
 

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
        setAttempts((prev)=> prev + 1 )
        setUserInput('')
      } else {
        setAnswerStatus("incorrect");
        setBackground("incorrect");
        setAttempts((prev)=> prev + 1 )
        setUserInput('')
      }
    });
  };

  const nextQuestion =()=> {
    setNext((prev)=> prev + 1)
    setBackground('')
    setAnswerStatus('')
    setAttempts(0)
    setUserInput('')
  }



  console.log(riddleData);
  console.log(answer);
  console.log(answerStatus);
  return (
    <div className={background}>  //Given the background class as state defined state when winning condition block executed to give bakground as a class
      {riddleData.map((data) => { //data array taken out of the riddledata array through map function which is passsed through the riddles component as prop from the app.js where the use effect has fetch function to fetch the riddleData.
        return (
          <div className="riddle">
            <h1> {data.title}</h1> //title taken out of the data array through the data array which has come from api and put in the h1 tag
            <h2> {data.question}</h2> // question taken out of data array same way. 
            <h2>{attempts === 3 ? `Answer: ${data.answer}` : ''}</h2> // h2 only shows in content through the conditonal that attemptd = 3 or else empty string so doesnt show.  only happens when submithandler called 3 times correct answer or incorrect answer.
            {/* {storeanswer} */}
            <input
              value={userInput}
              placeholder="try your luck" // plsceholder text in the input field 
              className="user-answer" //classname for the input field to be styled.
              onChange={userAnswer} //user answer when changes saved in useranswer. `used to compare in submit handler to check if its equal to api answer logic.
            ></input>
            <button disabled={attempts === 3} onClick={submitHandler}>Submit</button> // button gets disabled when 3 attempts made. Attempts state increase by increments of 1 when submithandler is called whether in correct or incorrect block .
            <button onClick={nextQuestion}>Next Question</button> // next question button function resets the api question reloads use effect by creating a next state that changes in number when next button is clicked and used to second argument of use effect to reload page when button is clicked as next state changes.
            <h3>{answerStatus}</h3>  //answer state shows as text field as correct or incorrect state depending on whether the submithandler if in correct block or not.
            <h3>{`Attempts: ${attempts}`}</h3>  //contents of attempt updates as attempts state starts at 0 and increments by 1 everytime submit handler called for wither correct or incorrect block.
          </div>
        );
      })}
    </div>
  );
};

export default Riddles;

//Why is my api calling twice for each call and and then reloading with a new all again twice
