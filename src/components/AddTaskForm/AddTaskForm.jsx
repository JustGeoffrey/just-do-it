import React, { useState, useEffect } from "react";
import styles from './AddTaskForm.module.css';

const AddTaskForm = ({ addOrUpdateTask, taskToEdit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [status, setStatus] = useState("in-progress");

  const minDate = new Date('January 01, 2000')
  const maxDate = new Date('December 31, 3000')

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDesc(taskToEdit.desc || "");
      setDueDate(taskToEdit.dueDate || "");
      setAssignedTo(taskToEdit.assignedTo || "");
      setStatus(taskToEdit.status || "in-progress");
    } else {
      // Reset form if not editing
      setTitle("");
      setDesc("");
      setDueDate("");
      setAssignedTo("");
      setStatus("in-progress");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: taskToEdit ? taskToEdit.id : null,
      title,
      desc,
      dueDate,
      assignedTo,
      status,
    };
    addOrUpdateTask(task);
  };

  return (
    <form
      className="task-form bg-light p-4 rounded shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center mb-4">
        Conquer your Day! One Task at a time!!!
      </h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            // This extra line is required to remove the validity message
            e.target.setCustomValidity('')
          }}
          onInvalid={(e) => {e.target.setCustomValidity('Please enter a title')}}
          required
          // pattern=""
        />
      </div>
      <div className="form-group">
        <label>Desc</label>
        <input
          type="text"
          className="form-control"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
          min='2000-01-01'
          max='3000-12-31'
        />
      </div>
      <div className="form-group">
        <label>Assigned To</label>
        <input
          type="text"
          className="form-control"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
          <option value="review">Review</option>
        </select>
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" className={`btn mt-4 ${styles.button}`}>
          {taskToEdit ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
