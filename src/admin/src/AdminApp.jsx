import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Users from './pages/Users';
import Home from './pages/Home';
import Notes from './pages/Notes';
import Login from './Login';
import Admission from './pages/Admission';
import Training from './pages/Training';
import CoursePage from './pages/Course';
import SyllabusPage from './pages/Syllabus';
import AdsPage from './pages/Ads';
import EnrollmentRequestsTable from './pages/EnrollmentRequestsTable';
import College from './pages/College';
import AdmissionApplicationsTable from './pages/AdmissionApplicationsTable';
import './AdminApp.css';


function Layout({ OpenSidebar, openSidebarToggle }) {
  return (
    <div className="admin-container">
    <div className="admin-panel">
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
    </div>
  );
}



function AdminApp() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) setIsAuthenticated(true);
  }, []);

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  return (
    <Routes>
      <Route path="login" element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />

      {isAuthenticated ? (
        <Route
          path="/"
          element={
            <Layout
              OpenSidebar={OpenSidebar}
              openSidebarToggle={openSidebarToggle}
            />
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="college" element={<College />} />
          <Route path="users" element={<Users />} />
          <Route path="notes" element={<Notes />} />
          <Route path="Admission" element={<Admission />} />
          <Route path="EnrollmentRequestsTable" element={<EnrollmentRequestsTable />} />
          <Route path="Training" element={<Training />} />
          <Route path="AdmissionApplicationsTable" element={<AdmissionApplicationsTable />} />
          <Route path="CoursePage" element={<CoursePage />} />
          <Route path="SyllabusPage" element={<SyllabusPage />} />
          <Route path="AdsPage" element={<AdsPage />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="home" />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/admin/login" />} />
      )}
    </Routes>
  );
}


export default AdminApp;





// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Users from './pages/Users';
// import Home from './pages/Home';
// import Notes from './pages/Notes';
// import Login from './Login';
// import Admission from './pages/Admission';
// import Training from './pages/Training';
// import CoursePage from './pages/Course';
// import SyllabusPage from './pages/Syllabus';
// import AdsPage from './pages/Ads';
// import EnrollmentRequestsTable from './pages/EnrollmentRequestsTable';
// import College from './pages/College';
// import AdmissionApplicationsTable from './pages/AdmissionApplicationsTable'


// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if user is already logged in
//     const user = localStorage.getItem("user");
//     if (user) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   };

//   return (
//     <Router>
//       <Routes>
//         {/* Login Route */}
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

//         {/* Protect all other routes */}
//         <Route
//           path="/*"
//           element={
//             isAuthenticated ? (
//               <div className='grid-container'>
//                 <Header OpenSidebar={OpenSidebar} />
//                 <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//                 <main className='main-content'>
//                   <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/college" element={<College />} />
//                     <Route path="/users" element={<Users />} />
//                     <Route path="/notes" element={<Notes />} />
//                     <Route path="/Admission" element={<Admission />} />
//                     <Route path="/EnrollmentRequestsTable" element={<EnrollmentRequestsTable />} />
//                     <Route path="/Training" element={<Training />} />
//                     <Route path="/AdmissionApplicationsTable" element={<AdmissionApplicationsTable />} />
//                     <Route path="/CoursePage" element={<CoursePage />} />
//                     <Route path="/SyllabusPage" element={<SyllabusPage />} />
//                     <Route path="/CoursePage" element={<CoursePage />} />
//                     <Route path="/AdsPage" element={<AdsPage />} />
//                   </Routes>
//                 </main>
//               </div>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





