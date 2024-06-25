import React, { useState } from "react";
import Task from "../Task/Task";
import styles from "./ListTask.module.css";
import TaskStatus from "../../components/TaskStatus/TaskStatus";
import AddTaskForm from "../AddTaskForm/AddTaskForm";

const ListTask = ({ toDoList, saveTasks, apiData }) => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  //Toggle visibilty of AddNewTask Form
  const toggleTaskFormVisibility = () => {
    setIsTaskFormVisible(!isTaskFormVisible);
  };

  //function to toggle status and save updated tasks to local storage
  const toggleStatus = (taskId) => {
    const statuses = ["in-progress", "completed", "review"];

    const updatedToDoList = toDoList.map((task) => {
      if (task.id === taskId) {
        const currentIndex = statuses.indexOf(task.status);
        const nextIndex = (currentIndex + 1) % statuses.length;
        return {
          ...task,
          status: statuses[nextIndex],
        };
      }
      return task;
    });
    saveTasks(updatedToDoList); // Save updated tasks to local storage
  };

  // Function to add or update a task
  const addOrUpdateTask = (task) => {
    if (taskToEdit) {
      // Update task
      const updatedTasks = toDoList.map((t) => (t.id === task.id ? task : t));
      saveTasks(updatedTasks);
    } else {
      // Add new task
      const newTask = {
        ...task,
        id: toDoList.length + 1,
      };
      const newTasks = [...toDoList, newTask];
      saveTasks(newTasks);
    }
    toggleTaskFormVisibility();
    setTaskToEdit(null);
  };

  // Function to handle task edit
  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsTaskFormVisible(true);
  };

  // Function to delete a task and save the updated list to local storage
  const deleteTask = (taskId) => {
    const updatedToDoList = toDoList.filter((task) => task.id !== taskId);
    saveTasks(updatedToDoList); // Save updated tasks to local storage
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const handleViewAllTasks = () => {
    setSelectedOption("all");
  };

  // Filter tasks based on the selected option
  const filteredTasks =
    selectedOption === "all"
      ? toDoList
      : toDoList.filter((task) => task.status === selectedOption);

  return (
    <div className="container mt-4 mb-4">
      {/* {console.log(apiData)} */}
      <div className="card shadow-sm">
        <div className="card-body">
          {isTaskFormVisible && (
            <AddTaskForm addOrUpdateTask={addOrUpdateTask} taskToEdit={taskToEdit} apiData={apiData}/>
          )}
          <TaskStatus
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />
          {filteredTasks.map((task) => (
            <Task
              key={task.title}
              task={task}
              onToggleStatus={toggleStatus}
              onDelete={deleteTask}
              onEdit={handleEditTask}
            />
          ))}
          <div className="d-flex justify-content-between mt-4 mb-2">
            <button
              className={`btn ${styles.addTaskButton}`}
              onClick={toggleTaskFormVisibility}
            >
              Add New Task
            </button>
            <button
              className={`btn ${styles.addTaskButton}`}
              onClick={handleViewAllTasks}
            >
              View All Tasks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTask;
