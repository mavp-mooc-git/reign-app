import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: '#1797ff'
};

const Tabs = () => {
  return (
    <div className="navigation">
      <Link to="/" style={linkStyle}>All</Link>
      <Link to="/faves" style={linkStyle}>My faves</Link>
    </div>
  )
};

export default Tabs;
