// src/components/Header.jsx
function Header({ handleLogout }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#eee",
      }}
    >
      <h3>
        <b>Team Members</b>
      </h3>
      <div>
        <input type="text" placeholder="Search..." />
        <button>Add Member</button>
        <span style={{ margin: "0 10px" }}>👤 John Doe</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
