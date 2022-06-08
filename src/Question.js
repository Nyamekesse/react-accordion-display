import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question-card">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <AiOutlineMinus color="#ba9c70" size={"2em"} />
          ) : (
            <AiOutlinePlus color="#ba9c70" size={"2em"} />
          )}
        </button>
      </header>
      <p>{showInfo && info}</p>
    </article>
  );
};

export default Question;
