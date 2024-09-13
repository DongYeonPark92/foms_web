import React from "react";
import Sidebar from "../components/sidebars/Sidebar";
import "../CSS/MainPage.css";

function MainPage() {
  return (
    <div className="app-container">
      <div className="content-container">
        <Sidebar />
      </div>
    </div>
  );
}

export default MainPage;
