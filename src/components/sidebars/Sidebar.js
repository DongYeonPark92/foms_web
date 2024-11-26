import React, { useState } from "react";
import "../../CSS/sidebars/Sidebar.css";
import FMS from "./FMS";
import OMS from "./OMS";
import DMS from "./DMS";
import IMS from "./IMS";
import User from "./User";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({
    FMS: false,
    OMS: false,
    DMS: false,
    IMS: false,
    User: false,
  });

  const toggleMenu = (menu) => {
    setIsOpen((prevState) => {
      const updatedState = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === menu ? !prevState[key] : false;
        return acc;
      }, {});
      return updatedState;
    });
  };

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <a href="/" className="sidebar-logo">
          {/* 로딩 중일 때 로고 대신 텍스트 또는 스피너를 표시 */}
          {isLoading && <div className="loading">Loading...</div>}
          <img
            src={`${process.env.PUBLIC_URL}/images/anritsu.png`}
            alt="Company Logo"
            className="Anritsu-logo"
            onLoad={() => setIsLoading(false)}
            style={{ display: isLoading ? "none" : "block" }}
          />
        </a>
      </div>
      <ul className="nav">
        <FMS isOpen={isOpen.FMS} toggleMenu={toggleMenu} />
        <OMS isOpen={isOpen.OMS} toggleMenu={toggleMenu} />
        <DMS isOpen={isOpen.DMS} toggleMenu={toggleMenu} />
        <IMS isOpen={isOpen.IMS} toggleMenu={toggleMenu} />
        <User isOpen={isOpen.User} toggleMenu={toggleMenu} />
      </ul>
    </div>
  );
};

export default Sidebar;
