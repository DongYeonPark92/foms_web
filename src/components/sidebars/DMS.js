import React from "react";

const DMS = ({ isOpen, toggleMenu }) => {
  return (
    <li>
      <button
        className="nav-link"
        onClick={() => toggleMenu("DMS")}
        aria-expanded={isOpen}
      >
        🛒 DMS
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

export default DMS;
