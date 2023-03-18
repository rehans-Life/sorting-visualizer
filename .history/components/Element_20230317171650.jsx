import React from "react";

export default function Element({ number }) {
  return (
    <div className={styles.element} style={{ height: `${number}px` }}></div>
  );
}
