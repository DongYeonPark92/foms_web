import React from "react";

const FMS = ({ isOpen, toggleMenu }) => {
  return (
    <li>
      <button
        className="nav-link"
        onClick={() => toggleMenu("FMS")}
        aria-expanded={isOpen}
      >
        🌎 FMS
      </button>
      {isOpen && (
        <ul className="submenu">
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Updates</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
        </ul>
      )}
    </li>
  );
};

export default FMS;
