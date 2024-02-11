

import React from "react";
import { NavLink } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Navigation = () => {
  return (
    <div>
      <NavigationBar/>
      <div style={homeStyle}>
        <h1>This is the Homepage</h1>
        <p>Welcome to our website!</p>
      </div>
    </div>
  );
};

const homeStyle = {
  textAlign: "center",
  marginTop: "20px",
};

export default Navigation;
