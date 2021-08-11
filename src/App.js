import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Homework",
      day: "Feb 2nd at 2:50pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Football",
      day: "Feb 8th at 6:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Party",
      day: "Mar 19th at 9:20am",
      reminder: false,
    },
  ]);

  /**
   * Deletes a task from the task array
   * @param {id} id
   */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /**
   * Adds a task to the array
   * @param {task} task
   */
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  };

  /**
   * Roggles reminder setting
   * @param {id} id
   */
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        onShow={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
    </div>
  );
}

export default App;
