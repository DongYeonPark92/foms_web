import React from "react";

const OMS = ({ isOpen, toggleMenu }) => {
  return (
    <li>
      <button
        className="nav-link"
        onClick={() => toggleMenu("OMS")}
        aria-expanded={isOpen}
      >
        🐷 OMS
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

export default OMS;
