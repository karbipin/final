import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminApp from "./admin/src/AdminApp";
import UserApp from "./user/src/UserApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin side routes */}
        <Route path="/admin/*" element={<AdminApp />} />

        {/* User side routes */}
        <Route path="/*" element={<UserApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
