import React from "react";
import styles from "./Task.module.css";

const Task = ({ task, onToggleStatus, onDelete, onEdit }) => {
  const { title, desc, dueDate, assignedTo, status } = task;
  let statusColorClass = "";

  //Function to handle the toggle status
  const handleToggleStatus = () => {
    onToggleStatus(task.id);
  };

  // Function to handle the delete action
  const handleDelete = () => {
    onDelete(task.id);
  };

  // Function to handle the edit action
  const handleEdit = () => {
    onEdit(task);
    console.log(task);
  };

  // Determine the color class based on the status value
  switch (status) {
    case "in-progress":
      statusColorClass = styles.inProgress; // CSS class for green color
      break;
    case "completed":
      statusColorClass = styles.completed; // CSS class for blue color
      break;
    case "review":
      statusColorClass = styles.inReview; // CSS class for red color
      break;
    default:
      statusColorClass = styles.defaultColor; // Default color if none of the above
      break;
  }

  return (
    <div className={`card mb-3  ${styles.cardbg}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-8 order-1 order-md-1">
            <h6 className="card-title mb-2 text-muted">{title}</h6>
            <p className="card-text">{desc}</p>
            <div className="row">
              <div className="col-12 col-md-4">
                <small className="text-muted">Due Date: {dueDate}</small>
              </div>
              <div className="col-12 col-md-4">
                <small className="text-muted">Assigned To: {assignedTo}</small>
              </div>
              <div className="col-12 col-md-4">
                <small className="text-muted">
                  Status: <span className={statusColorClass}>{status}</span>
                </small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 order-2 order-md-2 d-flex justify-content-md-end align-items-center mt-3 mt-md-0">
            <div className="btn-group" role="group" aria-label="Task actions">
              <button
                type="button"
                className={`btn btn-link p-10  ${styles.iconcolor}`}
                aria-label="Edit Task"
                onClick={handleEdit}
              >
                <i className="bi bi-pencil"></i>
                <span className="d-none d-md-inline"> Edit</span>
              </button>
              <button
                type="button"
                className={`btn btn-link p-10  ${styles.iconcolor}`}
                aria-label="Delete Task"
                onClick={handleDelete}
              >
                <i className="bi bi-trash"></i>
                <span className="d-none d-md-inline"> Delete</span>
              </button>
              <button
                type="button"
                className={`btn btn-link p-10  ${styles.iconcolor}`}
                aria-label="Toggle Status"
                onClick={handleToggleStatus}
              >
                <i className="bi bi-toggle-off"></i>
                <span className="d-none d-md-inline"> Toggle Status</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
