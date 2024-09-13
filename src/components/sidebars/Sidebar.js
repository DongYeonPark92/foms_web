import React, { useState } from "react";
import "../CSS/Sidebar.css";
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
    setIsOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="sidebar">
      <a href="/" className="sidebar-logo">
        <img
          src={`${process.env.PUBLIC_URL}/images/anritsu.png`}
          alt="Company Logo"
          className="Anritsu-logo"
        />
      </a>
      <ul className="nav">
        <FMS isOpen={isOpen.FMS} toggleMenu={toggleMenu} />
        <OMS isOpen={isOpen.OMS} toggleMenu={toggleMenu} />
        <DMS isOpen={isOpen.DMS} toggleMenu={toggleMenu} />
        <IMS isOpen={isOpen.IMS} toggleMenu={toggleMenu} />
      </ul>
      <div className="user-profile">
        <img
          src="path_to_avatar_image.jpg"
          alt="User Avatar"
          className="user-avatar"
        />
        <div className="dropdown">
          <li>
            <button
              className="nav-link"
              onClick={() => toggleMenu("account")}
              aria-expanded={isOpen.account}
            >
              Dongyeon Park
            </button>
            {isOpen.account && (
              <ul className="submenu">
                <li>
                  <a href="#">New...</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Sign out</a>
                </li>
              </ul>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
