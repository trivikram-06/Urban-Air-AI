import { NavLink } from "react-router-dom";
import { FaHome, FaRobot, FaChartLine, FaBell } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <NavLink to="/" className="menu-item">
        <FaHome /> Dashboard
      </NavLink>

      <NavLink to="/prediction" className="menu-item">
        <FaRobot /> Prediction
      </NavLink>

      <NavLink to="/analytics" className="menu-item">
        <FaChartLine /> Analytics
      </NavLink>

      <NavLink to="/alerts" className="menu-item">
        <FaBell /> Alerts
      </NavLink>

    </aside>
  );
}

export default Sidebar;