import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "#1797ff",
  padding: "8px 40px",
  borderRadius: "2px",
  border: "solid 1px #1797ff"
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
