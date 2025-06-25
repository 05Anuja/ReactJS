import React from "react";
import CreateUser from "./Dashboard/CreateUser";
import Header from "./Dashboard/Header";
import Sidebar from "./Dashboard/Sidebar";
import ProfileCard from "./Dashboard/ProfileCard";
import "./index.css";

const App = () => {
  return (
    <>
      <CreateUser>
        <div className="container">
          <Header />
          <div className="layout">
            <Sidebar />
            <ProfileCard />
          </div>
        </div>
      </CreateUser>
    </>
  );
};

export default App;
