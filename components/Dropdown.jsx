import React, { useState } from "react";

import { GoChevronDown } from "react-icons/go";
import styles from "../styles/Dropdown.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { algorithms } from "../utils/data";

export default function Dropdown({
  setSelectedAlgo,
  selectedAlgo,
  showDropdown,
  setShowDropdown,
  disable,
}) {
  return (
    <div className={styles.container}>
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={`${styles.select} ${showDropdown && styles.selectClicked}`}
      >
        <p>Sorting Algorithms</p>
        <GoChevronDown className={showDropdown ? styles.chevronUp : ""} />
      </div>
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            className={styles.dropdown}
            initial={{ scale: 0.4, translateY: -40 }}
            animate={{ scale: 1, translateY: 7 }}
            exit={{ scale: 0, translateY: -40 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
