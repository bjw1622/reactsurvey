import React from "react";
import QuestionContent from "./QuestionContent";
import dataSet from "../src/questionData.json";
import styles from "./QuestionBody.module.css";

const QuestionBody = (props) => {
  return (
    <>
      <div className={styles.QuestionBody}>
        <h2 style={{ display: "grid", placeItems: "center" }}>점검 항목</h2>
        <div>
          <h2 style={{ display: "grid", placeItems: "center" }}>점검 결과</h2>
          <div className={styles.QuestionBodyResultInfo}>
            <h3 style={{ marginLeft: "7px" }}>양호</h3>
            <h3 style={{ marginLeft: "8px" }}>미흡</h3>
            <h3 style={{ marginRight: "0px", paddingRight: "20px" }}>
              해당 없음
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.QuestionBodyMain}>
        {dataSet.map((item, index) => {
          return (
            <QuestionContent
              key={index}
              item={item}
              answerList={props.answerList}
            ></QuestionContent>
          );
        })}
      </div>
    </>
  );
};
export default QuestionBody;
