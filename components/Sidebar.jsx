import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Sidebar.module.css";
import { IoMdClose } from "react-icons/io";
import { algorithms } from "../utils/data";
import { generateRandomArray } from "../utils/generateRandomArray";
import { visualize } from "../utils/visualize";

export default function Sidebar({
  setShowSidebar,
  showSidebar,
  array,
  setArray,
  selectedAlgo,
  setSelectedAlgo,
  bars,
  height,
  disable,
  setDisable,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 100, animationDuration: 400 }}
      animate={{ opacity: 1, translateX: 0, animationDuration: 400 }}
      exit={{ opacity: 0, translateX: 100, animationDuration: 400 }}
      className={styles.sidebar}
    >
      <div
        className={styles.close}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <IoMdClose />{" "}
      </div>
      <div className={styles.algorithms}>
        {algorithms.map(({ name }, index) => (
          <button
            disabled={disable}
            onClick={() => setSelectedAlgo(name)}
            key={index}
            className={`${styles.algorithm} ${
              selectedAlgo === name ? styles.selectedAlgorithm : ""
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      <button
        disabled={disable}
        className={styles.btn}
        onClick={() => {
          setShowSidebar(false);
          setDisable(true);
          visualize(selectedAlgo, array, setArray, setDisable);
        }}
      >
        {selectedAlgo ? `Visualize ${selectedAlgo}` : "Pick an Algorithm!"}
      </button>
      <button
        disabled={disable}
        className={styles.btn}
        onClick={() => {
          let ctx = new AudioContext();
          setArray(generateRandomArray(bars, height, ctx));
        }}
      >
        Generate New Array
      </button>
    </motion.div>
  );
}
