import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AttendancePage from './pages/AttendancePage';
import SalaryPage from './pages/SalaryPage';
import LoginPage from './pages/LoginPage';
import EmployeesPage from './pages/EmployeesPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/attendance" element={<AttendancePage />} />
      <Route path="/salary" element={<SalaryPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/employees" element={<EmployeesPage />} />
      <Route path="/signup" element={<SignUpPage />} /> 
      <Route path="/profile" element={<ProfilePage />} /> 
      <Route path="/profile" element={<ProfilePage />} /> 
      <Route path="/dashboard" element={<DashboardPage />} />      
      {/* Add more routes for other pages */}
    </Routes>
  );
};

export default AppRoutes;
