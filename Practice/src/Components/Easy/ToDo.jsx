import React, { useState } from "react";

const ToDo = () => {
  const [taskInput, setTaskInput] = useState("");
  const [task, setTask] = useState([]);

  const inputHandler = (e) => {
    setTaskInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTask((prevData) => [...prevData, { todo: taskInput }]);
    setTaskInput("");
  };
  
  return (
    // Created a simple To-Do 
    <>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          name="todo"
          id="todo"
          value={taskInput}
          placeholder="Write your task here..."
          onChange={inputHandler}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {task &&
          task.length > 0 &&
          task.map((item, idx) => (
            <li key={idx}>{item.todo}</li>
          ))}
      </ul>
    </>
  );
};

export default ToDo;
