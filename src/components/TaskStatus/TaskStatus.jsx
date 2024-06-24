import React, { useState } from "react";
import styles from "./TaskStatus.module.css";

const TaskStatus = ({ selectedOption, onOptionChange }) => {
  return (
    <div className={`w-80 d-flex justify-content-around mb-5 mt-5 ${styles.radiobtn}`}>
       
        <label>
          <input
            type="radio"
            name="options"
            id="in-progress"
            autoComplete="off"
            checked={selectedOption === "in-progress"}
            onChange={onOptionChange}
          />
          In-Progress
        </label>
        <label>
          <input
            type="radio"
            name="options"
            id="completed"
            autoComplete="off"
            checked={selectedOption === "completed"}
            onChange={onOptionChange}
          />
          Completed
        </label>
        <label>
          <input
            type="radio"
            name="options"
            id="review"
            autoComplete="off"
            checked={selectedOption === "review"}
            onChange={onOptionChange}
          />
          Review
        </label>
     
    </div>
  );
};

export default TaskStatus;
