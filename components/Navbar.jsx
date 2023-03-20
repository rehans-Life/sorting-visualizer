import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { algorithms } from "../utils/data";
import { generateRandomArray } from "../utils/generateRandomArray";
import { visualize } from "../utils/visualize";
import Dropdown from "./Dropdown";
import { BiMenu } from "react-icons/bi";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";

export default function Navbar({
  navRef,
  array,
  setArray,
  selectedAlgo,
  setSelectedAlgo,
  height,
  bars,
}) {
  const [disable, setDisable] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div ref={navRef} className={styles.container}>
      <h1 className={styles.heading}>Sorting Visualizer</h1>
      <div className={styles.menu} onClick={() => setShowSidebar(!showSidebar)}>
        <BiMenu />{" "}
      </div>
      <AnimatePresence>
        {showSidebar && (
          <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            array={array}
            selectedAlgo={selectedAlgo}
            setSelectedAlgo={setSelectedAlgo}
            setArray={setArray}
            bars={bars}
            height={height}
            setDisable={setDisable}
          />
        )}
      </AnimatePresence>
      <div className={styles.options}>
        <button
          disabled={disable}
          className={styles.visualizeBtn}
          onClick={() => {
            let ctx = new AudioContext();
            setArray(generateRandomArray(bars, height, ctx));
          }}
        >
          Generate New Array
        </button>
        <button
          disabled={disable}
          className={styles.visualizeBtn}
          onClick={() => {
            setShowDropdown(false);
            setDisable(true);
            visualize(selectedAlgo, array, setArray, setDisable);
          }}
        >
          {selectedAlgo ? `Visualize ${selectedAlgo}` : "Pick an Algorithm!"}
        </button>
        <Dropdown
          selectedAlgo={selectedAlgo}
          setSelectedAlgo={setSelectedAlgo}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
          disable={disable}
        />
        <div className={styles.algorithms}>
          {algorithms.map(({ name }, index) => (
            <button
              disabled={disable}
              onClick={() => setSelectedAlgo(name)}
              key={index}
              className={selectedAlgo === name ? styles.selectedAlgo : ""}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
