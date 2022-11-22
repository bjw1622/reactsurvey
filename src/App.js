import React from "react";
import styled from "styled-components";
import Info from "./Info";
import QuestionBody from "./QuestionBody";
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
  const answerDataSet = [
    [
      { index: 0, answer: 2 },
      { index: 1, answer: 2 },
      { index: 2, answer: 2 },
      { index: 3, answer: 2 },
      { index: 4, answer: 2 },
      { index: 5, answer: 2 },
      { index: 6, answer: 2 },
      { index: 7, answer: 2 },
      { index: 8, answer: 2 },
      { index: 9, answer: 2 },
      { index: 10, answer: 1 },
      { index: 11, answer: 1 },
      { index: 12, answer: 1 },
      { index: 13, answer: 1 },
      { index: 14, answer: 1 },
      { index: 15, answer: 1 },
      { index: 16, answer: 1 },
      { index: 17, answer: 1 },
      { index: 18, answer: 1 },
      { index: 19, answer: 2 },
      { index: 20, answer: 1 },
      { index: 21, answer: 0 },
      { index: 22, answer: 0 },
      { index: 23, answer: 2 },
      { index: 24, answer: 2 },
      { index: 25, answer: 2 },
      { index: 26, answer: 2 },
      { index: 27, answer: 2 },
      { index: 28, answer: 2 },
      { index: 29, answer: 2 },
      { index: 30, answer: 1 },
      { index: 31, answer: 2 },
      { index: 32, answer: 0 },
      { index: 33, answer: 0 },
      { index: 34, answer: 1 },
      { index: 35, answer: 0 },
    ],
    [
      { index: 0, answer: 1 },
      { index: 1, answer: 1 },
      { index: 2, answer: 1 },
      { index: 3, answer: 1 },
      { index: 4, answer: 1 },
      { index: 5, answer: 1 },
      { index: 6, answer: 1 },
      { index: 7, answer: 1 },
      { index: 8, answer: 1 },
      { index: 9, answer: 1 },
      { index: 10, answer: 2 },
      { index: 11, answer: 2 },
      { index: 12, answer: 2 },
      { index: 13, answer: 2 },
      { index: 14, answer: 1 },
      { index: 15, answer: 0 },
      { index: 16, answer: 0 },
      { index: 17, answer: 0 },
      { index: 18, answer: 1 },
      { index: 19, answer: 1 },
      { index: 20, answer: 1 },
      { index: 21, answer: 1 },
      { index: 22, answer: 2 },
      { index: 23, answer: 2 },
      { index: 24, answer: 2 },
      { index: 25, answer: 2 },
      { index: 26, answer: 1 },
      { index: 27, answer: 1 },
      { index: 28, answer: 1 },
      { index: 29, answer: 2 },
      { index: 30, answer: 2 },
      { index: 31, answer: 2 },
      { index: 32, answer: 2 },
      { index: 33, answer: 1 },
      { index: 34, answer: 1 },
      { index: 35, answer: 0 },
    ],
    [
      { index: 0, answer: 2 },
      { index: 1, answer: 2 },
      { index: 2, answer: 2 },
      { index: 3, answer: 2 },
      { index: 4, answer: 2 },
      { index: 5, answer: 1 },
      { index: 6, answer: 1 },
      { index: 7, answer: 0 },
      { index: 8, answer: 1 },
      { index: 9, answer: 0 },
      { index: 10, answer: 1 },
      { index: 11, answer: 1 },
      { index: 12, answer: 1 },
      { index: 13, answer: 1 },
      { index: 14, answer: 1 },
      { index: 15, answer: 0 },
      { index: 16, answer: 0 },
      { index: 17, answer: 0 },
      { index: 18, answer: 1 },
      { index: 19, answer: 1 },
      { index: 20, answer: 1 },
      { index: 21, answer: 1 },
      { index: 22, answer: 0 },
      { index: 23, answer: 0 },
      { index: 24, answer: 0 },
      { index: 25, answer: 2 },
      { index: 26, answer: 1 },
      { index: 27, answer: 2 },
      { index: 28, answer: 2 },
      { index: 29, answer: 2 },
      { index: 30, answer: 2 },
      { index: 31, answer: 1 },
      { index: 32, answer: 1 },
      { index: 33, answer: 1 },
      { index: 34, answer: 1 },
      { index: 35, answer: 0 },
    ],
  ];
  return (
    // 응답자 갯수만큼 돌리기
    <div>
      {answerDataSet.map((item, index) => {
        return (
          <BackgroundDiv>
            <Info></Info>
            <QuestionBody></QuestionBody>
          </BackgroundDiv>
        );
      })}
    </div>
  );
};

export default App;
