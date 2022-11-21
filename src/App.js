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
`;
const App = () => {
  return (
    <BackgroundDiv>
      <Info></Info>
      <QuestionBody></QuestionBody>
    </BackgroundDiv>
  );
};

export default App;
