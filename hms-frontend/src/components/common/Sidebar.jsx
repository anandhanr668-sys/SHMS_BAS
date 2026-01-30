import React from "react";

const Sidebar = ({ menu = [] }) => {
  return (
    <aside className="sidebar">
      <ul>
        {menu.map((item, index) => (
          <li key={index} onClick={item.onClick}>
            {item.label}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
