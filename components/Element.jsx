import React from "react";
import styles from "../styles/Element.module.css";

export default function Element({ value, backgroundColor }) {
  return (
    <div
      className={styles.element}
      style={{ height: `${value}px`, backgroundColor: backgroundColor }}
    ></div>
  );
}
