import React from "react";
import QuestionCotentStyle from "./QuestionContent.module.css";
const QuestionContent = (props) => {
  return (
    <div key={props.item.index} className={QuestionCotentStyle.QuestionDiv}>
      <div style={{ marginLeft: "10px" }}>
        <h2>{props.item.question}</h2>
        <h4 style={{ whiteSpace: "pre-wrap" }}>{props.item.question2}</h4>
      </div>
      <div className={QuestionCotentStyle.QuestionInput}>
        {props.answerList.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.index === props.item.index ? (
                <>
                  <input
                    type="radio"
                    checked={item.answer === 0 ? true : false}
                    readOnly
                  />
                  <input
                    type="radio"
                    checked={item.answer === 1 ? true : false}
                    readOnly
                  />
                  <input
                    type="radio"
                    checked={item.answer === 2 ? true : false}
                    readOnly
                  />
                </>
              ) : (
                <></>
              )}
            </React.Fragment>
          );
        })}
        <br />
      </div>
    </div>
  );
};
export default QuestionContent;
