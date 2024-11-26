import React, { useState } from "react";

const FMS = ({ isOpen, toggleMenu }) => {
  const [showTable, setShowTable] = useState(false); // FMSTable 표시 여부 상태 추가
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
            <a href="#">Main</a>
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
