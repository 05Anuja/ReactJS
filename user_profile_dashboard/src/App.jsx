import React from "react";
import CreateUser from "./Dashboard/CreateUser";
import Header from "./Dashboard/Header";
import Sidebar from "./Dashboard/Sidebar";
import ProfileCard from "./Dashboard/ProfileCard";
import "./index.css";
import ProfileCard2 from "./Dashboard/ProfileCard2";

const App = () => {
  return (
    <>
      <CreateUser>
        <div className="container">
          <Header />
          <div className="layout">
            <Sidebar />
            {/* <ProfileCard /> */}
            <ProfileCard2 />
          </div>
        </div>
      </CreateUser>
    </>
  );
};

export default App;
