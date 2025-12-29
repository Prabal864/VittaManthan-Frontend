import React from "react";
import "../index.css";

const sidebarOptions = [
  { label: "Home", icon: "🏠" },
  { label: "Transactions", icon: "💸" },
  { label: "Budgeting", icon: "📊" },
  { label: "Investments", icon: "📈" },
  { label: "Analytics", icon: "📊" },
  { label: "Anomalies", icon: "⚠️" },
  { label: "Chat", icon: "💬" },
];

const Sidebar = ({ active, onSelect, onLogout }) => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <div className="logo">
        <span className="logo-icon">⚡</span> LiveRecon
      </div>
      <button className="logout-btn" onClick={onLogout} title="Logout">
        <span role="img" aria-label="logout">🚪</span> Logout
      </button>
    </div>
    <nav>
      <ul>
        {sidebarOptions.map((opt) => (
          <li
            key={opt.label}
            className={active === opt.label ? "active" : ""}
            onClick={() => onSelect(opt.label)}
          >
            <span style={{ marginRight: 8 }}>{opt.icon}</span>
            {opt.label}
          </li>
        ))}
      </ul>
    </nav>
    <div className="settings">Settings</div>
  </aside>
);

export default Sidebar;
