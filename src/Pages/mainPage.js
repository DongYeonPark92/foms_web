import React, { useState } from "react";
import Sidebar from "../components/sidebars/Sidebar";
import FMSTable from "../components/fms/FMSTable";
import "../CSS/MainPage.css";

function MainPage() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <div className="main-container">
      {/* Sidebar에 setSelectedMenu 전달 */}
      <Sidebar
        setSelectedMenu={setSelectedMenu}
        openSubMenu={openSubMenu}
        setOpenSubMenu={setOpenSubMenu}
      />
      <div className="content-area">
        {/* 선택된 메뉴에 따라 메인화면에 렌더링 */}
        {selectedMenu === "FMS" && <FMSTable />}
      </div>
    </div>
  );
}

export default MainPage;
