import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AttendancePage from './pages/AttendancePage';
import SalaryPage from './pages/SalaryPage';
import LoginPage from './pages/LoginPage';
import EmployeesPage from './pages/EmployeesPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import TestPage from './pages/TestPage';


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
      <Route path="/test" element={<TestPage />} />      
    </Routes>
  );
};

export default AppRoutes;
