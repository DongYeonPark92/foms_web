import React from "react";

const IMS = ({ isOpen, toggleMenu }) => {
  return (
    <li>
      <button
        className="nav-link"
        onClick={() => toggleMenu("IMS")}
        aria-expanded={isOpen}
      >
        🧸 IMS
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

export default IMS;
