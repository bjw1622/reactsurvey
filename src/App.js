import React from "react";
import styled from "styled-components";
import Info from "./Info";
import QuestionBody from "./QuestionBody";
import answerDataSet from "../src/answerData.json";
const BackgroundDiv = styled.div`
   {
    width: 210mm;
    min-height: 297mm;
    padding: 20mm; /* set contents area */
    margin: 10mm auto;
    border: 2px solid black;
    border-radius: 5px;
    background: #fff;
  }
  // 해당 엘리먼트의 다음 페이지 넘김을 지정
  @media print {
    page-break-after: always;
  }
`;

const App = () => {
  return (
    // 응답자 갯수만큼 돌리기
    <div>
      {answerDataSet.map((item, index) => {
        return (
          <BackgroundDiv key={index}>
            <Info></Info>
            <QuestionBody index={index} answerList={item}></QuestionBody>
          </BackgroundDiv>
        );
      })}
    </div>
  );
};

export default App;
