import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/login'; // 로그인 페이지 컴포넌트
import Oms from './Pages/oms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} /> {/* 루트 경로에서 /login으로 리다이렉트 */}
      <Route path="/login" element={<LoginPage />} /> {/* 루로그인 페이지 라우트 */}
      <Route path="/oms" element={<Oms />} /> {/* 메인 페이지 라우트 */}
    </Routes>
  );
}

export default App;