import React from "react";
import styled from "styled-components";

const InfoStyled = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-around;
`;
const Info = () => {
  return (
    <>
      <InfoStyled
        style={{
          display: "grid",
          gridTemplateColumns: "600px 200px",
          placeItems: "center",
        }}
      >
        <h1>부서</h1>
        <h1>이름</h1>
      </InfoStyled>
      <InfoStyled style={{ marginBottom: "30px" }}></InfoStyled>
    </>
  );
};
export default Info;
