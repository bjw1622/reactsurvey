import React from "react";

const QuestionContent = (props) => {
  return (
    <div
      key={props.key}
      style={{
        display: "grid",
        gridTemplateColumns: "600px 200px",
      }}
    >
      <div style={{ marginLeft: "10px" }}>
        <h2>{props.item.question}</h2>
        <h4 style={{ whiteSpace: "pre-wrap" }}>{props.item.question2}</h4>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          gridAutoFlow: "column",
        }}
      >
        <input className="good" style={{ marginLeft: "0px" }} type="radio" />
        <input
          className="bad"
          style={{ marginLeft: "0px", marginRight: "4px" }}
          type="radio"
          disabled
        />
        <input
          className="no"
          style={{ marginLeft: "10px", marginRight: "12px" }}
          type="radio"
        />
      </div>
      <br />
    </div>
  );
};
export default QuestionContent;
