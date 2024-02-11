import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav style={navStyle}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/counter" style={linkStyle}>Counter</NavLink>
      <NavLink to="/dashboard" style={linkStyle}>Dashboard</NavLink>
      <NavLink to="/posts/article1" style={linkStyle}>Article 1</NavLink>
      <NavLink to="/posts/article2" style={linkStyle}>Article 2</NavLink>
      <NavLink to="/UseNavigate" style={linkStyle}>Navigate</NavLink>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#333",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "5px 10px",
  border: "1px solid #fff",
  borderRadius: "5px",
};

export default NavigationBar;
