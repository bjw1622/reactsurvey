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
        <h2>{props.content}</h2>
        <h4>{props.contentTwo}</h4>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          gridAutoFlow: "column",
        }}
      >
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
      </div>
      <br />
    </div>
  );
};
export default QuestionContent;
