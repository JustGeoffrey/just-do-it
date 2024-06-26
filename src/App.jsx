import React, { useState, useEffect } from "react";
//PreLoad data
import data from "./data/PreLoadData.json";
//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListTask from "./components/ListTask/ListTask";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [loading, setLoading] = useState(true)
  const [apiData, setApiData] = useState({})
  const url = 'https://onlineprojectsgit.github.io/API/WDEndpoint.json'

  useEffect(() => {

    const storedTasks = JSON.parse(localStorage.getItem('toDoList'));
    if (storedTasks && storedTasks.length > 0) {
      setToDoList(storedTasks);
    } else {
      setToDoList(data); // Load data from PreLoadData.json if storage is empty
    }
  }, []);


  const fetchData = async () => {
    try{      
      const response = await fetch(url)
      if(!response.ok){
        throw new Error('A problem occured getting data')
      }
      const data = await response.json()
      setApiData(data)
      
    }
    catch (error) {
      console.error(error)
      setLoading(false)
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    // Grab information from the Endpoint
    fetchData()
  }, [])

  const saveTasks = (updatedTasks) => {
    setToDoList(updatedTasks);
    // Save the updated tasks to local storage
    localStorage.setItem("toDoList", JSON.stringify(updatedTasks));
  };


  return (
    <div>
      <Header />
      {!loading ? <ListTask toDoList={toDoList} saveTasks={saveTasks} apiData={apiData} /> : <h1>Loading</h1>}
      <Footer />
    </div>
  );
}

export default App;
