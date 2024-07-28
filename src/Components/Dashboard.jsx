// Dashboard.jsx
import React from 'react';
import About from './About';
import { NavLink, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';

export default function Dashboard() {
  return (
    <div>
      Dashboard Page
      <NavigationBar/>
      <nav>
        <NavLink to="dashboard">Dashboard</NavLink>
        <br/>
        <NavLink to="about">About</NavLink>
      </nav>
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>

      <h4>This is the dashboard page</h4>
    </div>
  );
}
