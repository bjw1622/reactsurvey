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
        <h4>{props.item.question2}</h4>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          gridAutoFlow: "column",
        }}
      >
        <input style={{ marginLeft: "0px" }} type="radio" />
        <input style={{ marginLeft: "0px", marginRight: "4px" }} type="radio" />
        <input
          style={{ marginLeft: "10px", marginRight: "12px" }}
          type="radio"
        />
      </div>
      <br />
    </div>
  );
};
export default QuestionContent;
