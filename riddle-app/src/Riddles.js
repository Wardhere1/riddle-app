import React from "react";

const Riddles = ({ riddleData }) => {
  return (
    <div>
      {riddleData.map((data) => {
        return (
          <div>
            <h1> {data.title}</h1>
            <h2> {data.question}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Riddles;
