import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Task1 from "./Hooks/Task1.jsx";
import Task2 from "./Hooks/Task2.jsx";
import Task3 from "./Hooks/Task3.jsx";
import Task4 from "./Hooks/Task4.jsx";
import Form from "./Form/Form.jsx";
import Form2 from "./Form/Form2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Task1/> */}
    {/* <Task2 /> */}
    {/* <Task3 /> */}
    {/* <Task4/> */}
    {/* <Form /> */}
    <Form2 />
  </StrictMode>
);
