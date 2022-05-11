import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div data-testid="loading-component" className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
