import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaRobot,
  FaChartLine,
  FaBell,
  FaCircle,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-header">
        <h2>🌍 Urban Air AI</h2>
        <p>Smart City Platform</p>
      </div>

      <div className="sidebar-menu">

        <NavLink to="/dashboard" className="menu-item">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/prediction" className="menu-item">
          <FaRobot />
          <span>Prediction</span>
        </NavLink>

        <NavLink to="/analytics" className="menu-item">
          <FaChartLine />
          <span>Analytics</span>
        </NavLink>

        <NavLink to="/alerts" className="menu-item">
          <FaBell />
          <span>Alerts</span>
        </NavLink>

      </div>

      <div className="sidebar-footer">

        <FaCircle className="status-dot"/>

        <span>Backend Connected</span>

      </div>

    </aside>
  );
}

export default Sidebar;