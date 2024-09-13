import React from "react";
import "../CSS/Dropdown.css";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropdown-toggle">Account</button>
      <ul className="dropdown-menu">
        <li>
          <a href="#">Settings</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
