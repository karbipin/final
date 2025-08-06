import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserApp from "./user/src/UserApp";
import AdminApp from "./admin/src/AdminApp";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/admin/*" element={<AdminApp />} />
      <Route path="/*" element={<UserApp />} />
    </Routes>
  </BrowserRouter>
);
