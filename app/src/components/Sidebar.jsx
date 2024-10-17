// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{ width: "250px", backgroundColor: "#f4f4f4", padding: "20px" }}
    >
      <h2>People.co</h2>
      <ul>
        <li>
          <Link to="/dashboard">Overview</Link>
        </li>
        <li>
          <Link to="/dashboard">People Directory</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
