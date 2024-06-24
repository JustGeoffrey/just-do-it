import React, { useState, useEffect } from "react";
//PreLoad data
import data from "./data/PreLoadData.json";
//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListTask from "./components/ListTask/ListTask";

function App() {
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('toDoList'));
    if (storedTasks && storedTasks.length > 0) {
      setToDoList(storedTasks);
    } else {
      setToDoList(data); // Load data from PreLoadData.json if storage is empty
    }
  }, []);

  const saveTasks = (updatedTasks) => {
    setToDoList(updatedTasks);
    // Save the updated tasks to local storage
    localStorage.setItem("toDoList", JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <Header />
      <ListTask toDoList={toDoList} saveTasks={saveTasks} />
      <Footer />
    </div>
  );
}

export default App;
