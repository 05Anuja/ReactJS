import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Task1 from "./Hooks/Task1.jsx";
import Task2 from "./Hooks/Task2.jsx";
import Task3 from "./Hooks/Task3.jsx";
import Task4 from "./Hooks/Task4.jsx";
import Form from "./Form/Form.jsx";
import Form2 from "./Form/Form2.jsx";
import CreateContext from "./UseContext/CreateContext.jsx";
import UseContext from "./UseContext/UseContext.jsx";
import UseContext2 from "./UseContext/UseContext2.jsx";
import CreateToggle from "./ToggleTheme/CreateToggle.jsx";
import UseToggle from "./ToggleTheme/UseToggle.jsx";
import ReducerTask1 from "./UseReducer/ReducerTask1.jsx";
import ReducerForm from "./UseReducer/ReducerForm.jsx";
import Parent from "./Task/Parent.jsx";
import PracticeTask1 from "./Task/PracticeTask1.jsx";
import PracticeTask2 from "./Task/PracticeTask2.jsx";
import PracticeTask3 from "./Task/PracticeTask3.jsx";
import ApiTesting from "./UseEffect/ApiTesting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Task1/> */}
    {/* <Task2 /> */}
    {/* <Task3 /> */}
    {/* <Task4/> */}
    {/* <Form /> */}
    {/* <Form2 /> */}
    {/* <CreateContext>
      <UseContext/>
      <UseContext2/>
    </CreateContext> */}

      {/* <CreateToggle>
        <UseToggle/>
      </CreateToggle> */}

        {/* <ReducerTask1 /> */}
        <ReducerForm />
        {/* <Parent/> */}
        {/* <PracticeTask1/> */}
        {/* <PracticeTask2 /> */}
        {/* <PracticeTask3/> */}
        {/* <ApiTesting /> */}

  </StrictMode>
);
