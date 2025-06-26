import React, { useReducer } from "react";
import "./index.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASKS":
      const tasks = {
        ...state,
        task: action.value,
      };
      return tasks;
    case "SUBMIT_TASK":
      if (state.task.trim()) {
        const submitTask = {
          ...state,
          todo: [...state.todo, state.task],
          task: "",
        };
        // console.log("ST", submitTask.todo);
        return submitTask;
      }
      return state;
    case "DELETE_TASK":
      const updatedTask = [...state.todo];
      updatedTask.splice(action.index, 1);
      return {
        ...state,
        todo: updatedTask,
      };
    default:
      return state;
  }
};

const ToDo = () => {
  const initialState = {
    todo: [],
    task: "",
  };
  const [toDoData, dispatch] = useReducer(reducer, initialState);

  const inputHandler = (e) => {
    dispatch({ type: "ADD_TASKS", value: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(toDoData);
    dispatch({
      type: "SUBMIT_TASK",
    });
  };

  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <div id="inputContainer">
          <input
            type="text"
            name="task"
            value={toDoData.task}
            placeholder="Write Task Here..."
            onChange={inputHandler}
          />
        </div>
        <button id="taskBtn">add task</button>
      </form>

      {toDoData.todo.length > 0 && (
        <div id="taskLists">
          <ul>
            {toDoData.todo.map((task, index) => {
              return (
                <li key={index}>
                  {task}
                  <button
                    onClick={() => dispatch({ type: "DELETE_TASK", index })}
                    id="deleteBtn"
                  >
                    DELETE
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default ToDo;
