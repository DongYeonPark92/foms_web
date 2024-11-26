import React, { useState } from "react";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-profile">
      <img src="" alt="User Avatar" className="user-avatar" />
      <div>
        <button className="nav-link" onClick={toggleMenu}>
          Dongyeon Park
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li>
              <a href="#">New Project</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Sign Out</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default User;
