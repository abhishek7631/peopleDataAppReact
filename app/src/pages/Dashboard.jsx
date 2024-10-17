// src/pages/Dashboard.jsx
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Overview from "./Overview";

function Dashboard({ setIsLoggedIn }) {
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header handleLogout={handleLogout} />
        <Overview />
      </div>
    </div>
  );
}

export default Dashboard;
