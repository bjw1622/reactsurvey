import React from "react";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <>
      <div className={styles.Info}>
        <h1>부서</h1>
        <h1>이름</h1>
      </div>
      <div className={styles.InfoBottom}></div>
    </>
  );
};
export default Info;
