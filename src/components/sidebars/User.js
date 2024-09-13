import React from "react";

const User = ({ isOpen, toggleMenu }) => {
  return (
    <li>
      <button
        className="nav-link"
        onClick={() => toggleMenu("USER")}
        aria-expanded={isOpen}
      >
        Dongyeon Park
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

export default User;
