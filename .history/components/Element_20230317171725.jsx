import React from "react";
import styles from "../styles/Element.module.css";

export default function Element({ number }) {
  return (
    <div className={styles.element} style={{ height: `${number}px` }}></div>
  );
}
