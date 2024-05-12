import React, { useState } from 'react'
function Todo() {
   const [task,setTasks] = useState();
   const [todos,setTodos] = useState([]);
   function addTask() {
    setTodos(oldTodos => {
       return[...oldTodos , task];
    })
    setTasks("");
   }
  return (
    <div>
      <h1> Best To Do App !! </h1>
      <label htmlFor="task">Add Your Task Here :</label><br />
      <input type="text" id="task" value={task} onChange={(event) =>  {
        setTasks(event.target.value);
      }}/> <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>
        })}
      </ul>
      
    </div>
  )
}
export default Todo
