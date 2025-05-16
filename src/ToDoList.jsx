import React, { useState } from 'react'

const ToDoList = () => {

  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleChange(e){
    setNewTask(e.target.value);
  }
  function addTask(){
    setTask(t => [...t, { text: newTask, completed: false }]);
    setNewTask("");
  }
  function deleteTask(index){
   const updatedTask =  task.filter((_, i) => i!== index);
   setTask(updatedTask);
  }

  function completedTasks(index){
    const checkedTask = task.map((t, i) => i === index ? {...t, completed: !t.completed} : t);
    setTask(checkedTask);
    console.log("CHECKED", index)
  }

  return (
  <div className="todo-app">
    <header className="app-header">
      <h1 className="app-title">My Todo App</h1>
    </header>
    
    <div className="todo-input-container">
      <input type="text" className="todo-input" placeholder="Add a new task..."  onChange={handleChange} value={newTask}/>
      <button className="add-btn" onClick={()=>addTask()}>Add</button>
    </div>
    
    
    <ul className="todo-list">
      {task.map((task, index) => 
          <li className="todo-item" key={index}>
              <input type="checkbox" className="todo-checkbox" onChange={()=>completedTasks(index)} checked={task.completed}/>
              <span className="todo-text" style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</span>
              <button className="delete-btn" onClick={()=> deleteTask(index)}>×</button>
          </li>
      )}
    </ul>
    
    <div className="todo-stats">
      {task.length} tasks total * {task.filter(t => t.completed).length} completed
    </div>
  </div>
   
  )
}

export default ToDoList