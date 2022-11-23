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
      { index: 36, answer: 1 },
      { index: 37, answer: 1 },
      { index: 38, answer: 1 },
      { index: 39, answer: 1 },
      { index: 40, answer: 1 },
      { index: 41, answer: 1 },
      { index: 42, answer: 1 },
      { index: 43, answer: 1 },
      { index: 44, answer: 1 },
      { index: 45, answer: 1 },
      { index: 46, answer: 2 },
      { index: 47, answer: 2 },
      { index: 48, answer: 2 },
      { index: 49, answer: 2 },
      { index: 50, answer: 1 },
      { index: 51, answer: 0 },
      { index: 52, answer: 0 },
      { index: 53, answer: 0 },
      { index: 54, answer: 1 },
      { index: 55, answer: 1 },
      { index: 56, answer: 1 },
      { index: 57, answer: 1 },
      { index: 58, answer: 2 },
      { index: 59, answer: 2 },
      { index: 60, answer: 2 },
      { index: 61, answer: 2 },
      { index: 62, answer: 1 },
      { index: 63, answer: 1 },
      { index: 64, answer: 1 },
      { index: 65, answer: 2 },
      { index: 66, answer: 2 },
      { index: 67, answer: 2 },
      { index: 68, answer: 2 },
      { index: 69, answer: 1 },
      { index: 70, answer: 1 },
      { index: 71, answer: 0 },
    ],
    [
      { index: 72, answer: 2 },
      { index: 73, answer: 2 },
      { index: 74, answer: 2 },
      { index: 75, answer: 2 },
      { index: 76, answer: 2 },
      { index: 77, answer: 1 },
      { index: 78, answer: 1 },
      { index: 79, answer: 0 },
      { index: 80, answer: 1 },
      { index: 81, answer: 0 },
      { index: 82, answer: 1 },
      { index: 83, answer: 1 },
      { index: 84, answer: 1 },
      { index: 85, answer: 1 },
      { index: 86, answer: 1 },
      { index: 87, answer: 0 },
      { index: 88, answer: 0 },
      { index: 89, answer: 0 },
      { index: 90, answer: 1 },
      { index: 91, answer: 1 },
      { index: 92, answer: 1 },
      { index: 93, answer: 1 },
      { index: 94, answer: 0 },
      { index: 95, answer: 0 },
      { index: 96, answer: 0 },
      { index: 97, answer: 2 },
      { index: 98, answer: 1 },
      { index: 99, answer: 2 },
      { index: 100, answer: 2 },
      { index: 101, answer: 2 },
      { index: 102, answer: 2 },
      { index: 103, answer: 1 },
      { index: 104, answer: 1 },
      { index: 105, answer: 1 },
      { index: 106, answer: 1 },
      { index: 107, answer: 0 },
    ],
  ];
  return (
    // 응답자 갯수만큼 돌리기
    <div>
      {answerDataSet.map((item, index) => {
        console.log(index);
        return (
          <BackgroundDiv>
            <Info></Info>
            <QuestionBody index={index}></QuestionBody>
          </BackgroundDiv>
        );
      })}
    </div>
  );
};

export default App;
