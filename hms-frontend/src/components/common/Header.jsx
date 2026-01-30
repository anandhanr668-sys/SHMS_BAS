import React from "react";

const Header = ({ title = "HMS Platform", user = "Admin", onLogout }) => {
  return (
    <header className="header">
      <h2>{title}</h2>

      <div className="header-right">
        <span>{user}</span>
        <button onClick={onLogout} className="btn-logout">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
