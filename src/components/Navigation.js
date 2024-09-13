import React from "react";
import "../CSS/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#" className="sidebar-logo"></a>
      <ul className="nav">
        <li>
          <a href="#" className="nav-link active">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Customers
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
