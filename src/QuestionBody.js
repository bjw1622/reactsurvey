import React from "react";
import styled from "styled-components";
import QuestionContent from "./QuestionContent";
import dataSet from "../src/questionData.json";
const QuestionBodyStyled = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid gray;
`;
const QuestionBody = (props) => {
  return (
    <>
      <QuestionBodyStyled
        style={{
          display: "grid",
          gridTemplateColumns: "600px 200px",
        }}
      >
        <h2 style={{ display: "grid", placeItems: "center" }}>점검 항목</h2>
        <div>
          <h2 style={{ display: "grid", placeItems: "center" }}>점검 결과</h2>
          <div
            style={{
              display: "grid",
              gridAutoFlow: "column",
              placeItems: "center",
            }}
          >
            <h3>양호</h3>
            <h3>미흡</h3>
            <h3>해당 없음</h3>
          </div>
        </div>
      </QuestionBodyStyled>
      <QuestionBodyStyled>
        {dataSet.map((item, index) => {
          return (
            <QuestionContent
              key={index}
              item={item}
              answerList={props.answerList}
            ></QuestionContent>
          );
        })}
      </QuestionBodyStyled>
    </>
  );
};
export default QuestionBody;
